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
        console.log('Banco de dados inicializado!');
    } catch (error) {
        console.log(error)
    } finally {
        db.release();
    }
};

module.exports = { pool, initDatabase };