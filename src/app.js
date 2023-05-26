require('dotenv').config();
const express = require('express');
const { initDatabase } = require('./config/db');

const app = express();

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.send('Seja bem vindo a API do meu site pessoal!');
});

initDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});