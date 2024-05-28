require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// models
const User = require("./models/User");

// Config JSON response
app.use(express.json());

// Open Route
app.get("/", (req, res) => {
  return res.send("API connected");
});

// Private Route
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  // check if user exists
  const user = await User.findById(id, "-password");

  if (!user) {
    return res.send("Usuário não encontrado!");
  }

  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ info: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ info: "O Token é inválido!" });
  }
}

app.post("/auth/register", async (req, res) => {
  const { name, register, email, password, cep, state, city, neighborhood, street, number, complement} = req.body;


  // validations
  if(!name){
    return res.status(422).json({info: 'Informe seu nome'})
}

 
if(!register){
  return res.status(422).json({info: 'Informe seu CNPJ ou CPF'})
}
if(!email){
  return res.status(422).json({info: 'Informe seu email'})
}
if(!password){
  return res.status(422).json({info: 'Informe sua senha'})
}
if(!cep){
  return res.status(422).json({info: 'Informe seu CEP'})
}
if(!state){
  return res.status(422).json({info: 'Informe seu Estado'})
}
if(!city){
  return res.status(422).json({info: 'Informe sua cidade'})
}
if(!neighborhood){
  return res.status(422).json({info: 'Informe seu bairro'})
}
if(!street){
  return res.status(422).json({info: 'Informe seu logradouro'})
}
if(!number){
  return res.status(422).json({info: 'Informe o número da sua casa'})
}

  // check if user exists
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ info: "O usuário já existe" });
  }
 
  // create user
  const user = new User({
    
    name,
    register,
    email,
    password, 
    cep, 
    state,
    city,
    neighborhood,
    street,
    complement

  });

  try {
    await user.save();

    res.status(201).json({ info: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ info: error });
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ info: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ info: "A senha é obrigatória!" });
  }

  // check if user exists
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ info: "Usuário não encontrado!" });
  }

  // check if password match
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ info: "Senha inválida" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    res.status(200).json({ info: "Autenticação realizada com sucesso!", token });
  } catch (error) {
    res.status(500).json({ info: error });
  }
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


mongoose.connect(`mongodb+srv://admin_marcelo:qqOb6xVsBeGwiADY@cluster0.yfmljrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    console.log("Database connect!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));