#   CRUD API
    O projeto e uma API de uma loja de livros que se conecta ao banco de dados
    MongoDB (pessoalmente eu prefiro o PostgreSQL, mas vamo que vamo).
    A API altera (atualiza), deleta, exclui, insere, etc.
#   INSTRUCOES
    Abrir o VSCODE (duh), instalar todas as dependencias (npm i), dar node no script que conecta a DB
    (dbConnection.js) e fazer os treco que voce quer fazer. Insano, eu sei 🤯.
#   ROUTES
    Atualmente, existem as rotas:
    booksRoutes.get('/', findBooks)
    booksRoutes.get('/addB', addBooks)
    booksRoutes.get('/update/:id', updateBook)
    booksRoutes.get('/delete/:id', deleteBook)
    Elas fazem exatamente o que o nome descreve. Supletivamente, para usar o Insomnia ou Postman, o projeto se inicia na rota '/books'.
    --
    app.use('/books', booksRoutes);
    --
    Para deletar, atualizar, ou adicionar, apenas coloque os respectivos id's ou rotas (no caso do /addB). Eu coloquei tudo no GET para nao ter nenhuma dor de cabeca de ficar trocando entre GET e POST, mas eu poderia mudar.
#   DATABASE
    A DB que eu criei e nomeada de "crdThing" - nome muito criativo, eu garanto.
#   CABO
    Isso e tudo o que voce precisa saber.