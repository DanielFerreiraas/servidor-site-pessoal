require('./config/dotenv');
require('express-async-errors');

const express = require('express');

const { initDatabase } = require('./config/db');
const cors = require('cors');

const experienciasRoute = require('./routes/experienciasRoute');
const portfoliosRoute = require('./routes/portfoliosRoute');
const informacoesRoute = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRoute');


const app = express();

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.send('Seja bem vindo a API do meu site pessoal!');
});

app.use(cors());
app.use(express.json());

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolios', portfoliosRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);

initDatabase();

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({'Error': err.message});
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});