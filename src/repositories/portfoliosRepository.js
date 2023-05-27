const { pool } = require('../config/db');

exports.getAllPortfolios = async () => {
    const result = await pool.query(`SELECT * FROM portfolios`);
    return result.rows;
};

exports.getProjetoById = async (id) => {
    const result = await pool.query('SELECT * FROM portfolios WHERE id = $1',[id]);
    return result.rows;
};

exports.createProjeto = async (projeto) => {
    const result = await pool.query(`
        INSERT INTO portfolios (titulo, link, imagem) 
        VALUES ($1, $2, $3)
        RETURNING *
    `,
    [projeto.titulo, projeto.link, projeto.imagem]);
    return result.rows[0];
};

exports.updateProjeto = async (id, projeto) => {
    const result = await pool.query(`
        UPDATE portfolios
        SET titulo = $1, link = $2, imagem = $3
        WHERE id = $4
        RETURNING *
    `,
    [projeto.titulo, projeto.link, projeto.imagem, id]);
    return result.rows[0];
};

exports.deleteProjeto = async (id) => {
    await pool.query('DELETE FROM portfolios WHERE id = $1', [id]);
};