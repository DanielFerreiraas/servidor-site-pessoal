require('dotenv').config();
const express = require('express');

const { initDatabase } = require('./config/db');7

const experienciasRoute = require('./routes/experienciasRoute');
const portfoliosRoute = require('./routes/portfoliosRoute');
const informacoesRoute = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRoute');

const app = express();

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.send('Seja bem vindo a API do meu site pessoal!');
});

app.use(express.json());

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolios', portfoliosRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);

initDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});