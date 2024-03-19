//importando o express
const express = require('express');

//inicializando o express
const app = express();

const port = 3000;


app.get("/", (req, res) => {
    res.send("Deu bom :) !")
})


//configuração da porta do servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
