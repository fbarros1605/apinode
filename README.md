# Exemplo de API NODE

Projeto criado com o objetivo de introduzir meu grande amigo Weslene, na linguagem JavaScript!
VQV!

# Pré requisitos para executar o projeto
- acesso a um banco MySQL
- criar um database de nome region_weslene e aplicar o modelo presente na pasta "db".
- abrir o arquivo config/enviroments/development.js e informar os dados de conexão com o banco (host, user, pws, etc...)
- dentro da pasta do projeto, executar 'npm install'
- para executar o projeto, digitar "node index.js"

Se tudo estive certo, essa será a saída exibida para a API:

$ node index

Service running... http://localhost:3004

Executing (default): SELECT 1+1 AS result
Connection has been established successfully.


O que você vai precisar estudar (não é difícil!)
- javascript
- ORM Sequelize (esse é a mesma coisa que o seu Hibernate no C#)
- Koa.js (Ninguém desenvolve nada "na unha", então, é necessário utilizar um framework de mercado. Esse é um deles. Ele foi criado pela equipe que criou o framework Express, que é um dos mais usados no mercado. Ele é bem tranquilo de entender e implementar).

Agora basta abrir o código, ver as rotas e brincar com a API!

Bons estudos!
