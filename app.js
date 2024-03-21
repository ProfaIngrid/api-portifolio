const express = require('express'); //importando o express
const app = express(); //inicializando o express
const port = 3000;
const usersRouter = require('./routes/usersRoute');
const projectsRouter = require('./routes/projectsRouter');

app.use('/', usersRouter);
app.use('/', projectsRouter);

app.get("/", (req, res) => {
    res.send("Deu bom :) !")
})

//configuração da porta do servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
