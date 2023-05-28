require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const initDatabase = async () => {
    const db = await pool.connect();
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS experiencias(
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                instituicao VARCHAR(255) NOT NULL,
                tipo VARCHAR(255) NOT NULL,
                ano_inicio INT NOT NULL,
                ano_fim INT
            );
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS portfolios(
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                link VARCHAR(255) NOT NULL,
                imagem VARCHAR(255) NOT NULL
            );
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS informacoes(
                id INT PRIMARY KEY,
                foto VARCHAR(255) NOT NULL,
                nome VARCHAR(255) NOT NULL,
                cargo VARCHAR(255) NOT NULL
            );
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS usuarios(
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `);

        console.log('Banco de dados inicializado!');
    } catch (error) {
        console.log(error)
    } finally {
        db.release();
    }
};

module.exports = { pool, initDatabase };