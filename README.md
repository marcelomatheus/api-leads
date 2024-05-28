.Dependências
- dotenv: Biblioteca para carregar variáveis de ambiente.
- express: Framework para criação de aplicações web.
- mongoose: Biblioteca para modelagem de dados no MongoDB.
- bcrypt: Biblioteca para hashing de senhas.
- jsonwebtoken: Biblioteca para criação e verificação de tokens JWT.

##Variáveis de Ambiente
- SECRET: Chave secreta usada para assinar tokens JWT.
- DB_USER: Nome de usuário do banco de dados.
- DB_PASS: Senha do banco de dados.


##Configuração Inicial
- require("dotenv").config(): Carrega variáveis de ambiente do arquivo .env para process.env.
- express: Inicializa a aplicação Express.
- app.use(express.json()): Configura o Express para parsear respostas JSON.


##Modelos
- User: Modelo de usuário importado do arquivo ./models/User.


##Funções e Roteamento
###Rota Aberta
- app.get("/"): Rota aberta que retorna uma mensagem de confirmação de conexão da API.
###Rota Privada
- app.get("/user/", checkToken, async (req, res)): Rota privada que retorna informações de um usuário específico, excluindo a senha.
###Middleware de Verificação de Token
- checkToken(req, res, next): Middleware que verifica a presença e a validade de um token JWT no cabeçalho de autorização.

###Registro de Usuário
- app.post("/auth/register", async (req, res)): Rota para registrar um novo usuário. Valida os campos obrigatórios, verifica a existência do usuário e cria um novo usuário no banco de dados.

###Login de Usuário
- app.post("/auth/login", async (req, res)): Rota para autenticação de usuário. Valida os campos email e password, verifica as credenciais e retorna um token JWT se a autenticação for bem-sucedida.
Conexão com o Banco de Dados
mongoose.connect(): Conecta ao banco de dados MongoDB usando as credenciais fornecidas nas variáveis de ambiente.
app.listen(3000): Inicia o servidor na porta 3000 após a conexão bem-sucedida com o banco de dados.
Objetivo de Cada Função
checkToken: Middleware que extrai o token do cabeçalho de autorização, verifica sua validade e permite o acesso às rotas privadas se o token for válido.
app.get("/"): Retorna uma mensagem de confirmação para verificar se a API está conectada corretamente.
app.get("/user/
"): Retorna os dados de um usuário específico, excluindo informações sensíveis como a senha.
app.post("/auth/register"): Registra um novo usuário após validação dos dados fornecidos.
app.post("/auth/login"): Autentica um usuário e retorna um token JWT se as credenciais estiverem corretas.
Mensagens de Resposta
"API connected": Mensagem de sucesso para a rota raiz.
"Usuário não encontrado!": Mensagem de erro para usuário inexistente.
"Acesso negado!": Mensagem de erro para acesso não autorizado.
"O Token é inválido!": Mensagem de erro para token inválido.
"O usuário já existe": Mensagem de erro para usuário já registrado.
"Usuário criado com sucesso!": Mensagem de sucesso ao criar um novo usuário.
"O email é obrigatório!": Mensagem de erro para email ausente.
"A senha é obrigatória!": Mensagem de erro para senha ausente.
"Usuário não encontrado!": Mensagem de erro para email não registrado.
"Senha inválida": Mensagem de erro para senha incorreta.
"Autenticação realizada com sucesso!": Mensagem de sucesso para login bem-sucedido.
