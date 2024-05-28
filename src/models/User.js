const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  register: String, //CPF or CNPJ
  email: String,
  password: String, 
  cep: Number, 
  state: String,
  city: String,
  neighborhood: String,
  street: String,
  number: Number,
  complement: String
})

module.exports = User