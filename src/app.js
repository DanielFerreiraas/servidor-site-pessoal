require('dotenv').config();

const express = require('express');

const app = express()

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Seja bem vindo a API do meu site pessoal!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});