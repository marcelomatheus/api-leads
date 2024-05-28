#Documentação
### [Dependências]{.c5 .c0} {#h.2i7vm51vk3kq .c6}

-   [dotenv]{.c0}[: Biblioteca para carregar variáveis de
    ambiente.]{.c2}
-   [express]{.c0}[: Framework para criação de aplicações web.]{.c2}
-   [mongoose]{.c0}[: Biblioteca para modelagem de dados no
    MongoDB.]{.c2}
-   [bcrypt]{.c0}[: Biblioteca para hashing de senhas.]{.c2}
-   [jsonwebtoken]{.c0}[: Biblioteca para criação e verificação de
    tokens JWT.]{.c2}

### [Variáveis de Ambiente]{.c0 .c5} {#h.rznmf0y8euqj .c6}

-   [SECRET]{.c0}[: Chave secreta usada para assinar tokens JWT.]{.c2}
-   [DB_USER]{.c0}[: Nome de usuário do banco de dados.]{.c2}
-   [DB_PASS]{.c0}[: Senha do banco de dados.]{.c2}

### [Configuração Inicial]{.c5 .c0} {#h.zfbzf43h6ezv .c6}

-   [require(\"dotenv\").config()]{.c0}: Carrega variáveis de ambiente
    do arquivo [.env]{.c3} para [process.env]{.c3}[.]{.c2}
-   [express]{.c0}[: Inicializa a aplicação Express.]{.c2}
-   [app.use(express.json())]{.c0}[: Configura o Express para parsear
    respostas JSON.]{.c2}

### [Modelos]{.c5 .c0} {#h.hg13t56xr6o .c6}

-   [User]{.c0}: Modelo de usuário importado do arquivo
    [./models/User]{.c3}[.]{.c2}

### [Funções e Roteamento]{.c5 .c0} {#h.ymd83nr4cipv .c6}

-   [app.get(\"/\")]{.c0}[: Rota aberta que retorna uma mensagem de
    confirmação de conexão da API.]{.c2}
-   [app.get(\"/user/\
    \", checkToken, async (req, res))]{.c0}[: Rota privada que retorna
    informações de um usuário específico, excluindo a senha.]{.c2}
-   [checkToken(req, res, next)]{.c0}[: Middleware que verifica a
    presença e a validade de um token JWT no cabeçalho de
    autorização.]{.c2}
-   [app.post(\"/auth/register\", async (req, res))]{.c0}[: Rota para
    registrar um novo usuário. Valida os campos obrigatórios, verifica a
    existência do usuário e cria um novo usuário no banco de
    dados.]{.c2}
-   [app.post(\"/auth/login\", async (req, res))]{.c0}: Rota para
    autenticação de usuário. Valida os campos [email]{.c3} e
    [password]{.c3}[, verifica as credenciais e retorna um token JWT se
    a autenticação for bem-sucedida.]{.c2}

### [Conexão com o Banco de Dados]{.c5 .c0} {#h.ng10dxjnfaak .c6}

-   [mongoose.connect()]{.c0}[: Conecta ao banco de dados MongoDB usando
    as credenciais fornecidas nas variáveis de ambiente.]{.c2}
-   [app.listen(3000)]{.c0}[: Inicia o servidor na porta 3000 após a
    conexão bem-sucedida com o banco de dados.]{.c2}

### [Objetivo de Cada Função]{.c5 .c0} {#h.ahhrhontbf77 .c6}

-   [checkToken]{.c0}[: Middleware que extrai o token do cabeçalho de
    autorização, verifica sua validade e permite o acesso às rotas
    privadas se o token for válido.]{.c2}
-   [app.get(\"/\")]{.c0}[: Retorna uma mensagem de confirmação para
    verificar se a API está conectada corretamente.]{.c2}
-   [app.get(\"/user/\
    \")]{.c0}[: Retorna os dados de um usuário específico, excluindo
    informações sensíveis como a senha.]{.c2}
-   [app.post(\"/auth/register\")]{.c0}[: Registra um novo usuário após
    validação dos dados fornecidos.]{.c2}
-   [app.post(\"/auth/login\")]{.c0}[: Autentica um usuário e retorna um
    token JWT se as credenciais estiverem corretas.]{.c2}

### [Mensagens de Resposta]{.c5 .c0} {#h.nbuex3bn4out .c6}

-   [\"API connected\"]{.c0}[: Mensagem de sucesso para a rota
    raiz.]{.c2}
-   [\"Usuário não encontrado!\"]{.c0}[: Mensagem de erro para usuário
    inexistente.]{.c2}
-   [\"Acesso negado!\"]{.c0}[: Mensagem de erro para acesso não
    autorizado.]{.c2}
-   [\"O Token é inválido!\"]{.c0}[: Mensagem de erro para token
    inválido.]{.c2}
-   [\"O usuário já existe\"]{.c0}[: Mensagem de erro para usuário já
    registrado.]{.c2}
-   [\"Usuário criado com sucesso!\"]{.c0}[: Mensagem de sucesso ao
    criar um novo usuário.]{.c2}
-   [\"O email é obrigatório!\"]{.c0}[: Mensagem de erro para email
    ausente.]{.c2}
-   [\"A senha é obrigatória!\"]{.c0}[: Mensagem de erro para senha
    ausente.]{.c2}
-   [\"Usuário não encontrado!\"]{.c0}[: Mensagem de erro para email não
    registrado.]{.c2}
-   [\"Senha inválida\"]{.c0}[: Mensagem de erro para senha
    incorreta.]{.c2}
-   [\"Autenticação realizada com sucesso!\"]{.c0}[: Mensagem de sucesso
    para login bem-sucedido.]{.c2}

[]{.c2}
