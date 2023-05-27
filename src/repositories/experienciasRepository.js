const { pool }  = require('../config/db');

exports.getAllExperiencias = async () => {
        const result = await pool.query('SELECT * FROM experiencias');
        return result.rows;
};

exports.getExperienciasById = async (id) => {
    const result = await pool.query(`SELECT * FROM experiencias WHERE id = $1`, [id]);
    return result.rows[0];
};

exports.createExperiencias = async (experiencia) => {
    const result = await pool.query(`
        INSERT INTO experiencias (titulo, instituicao, tipo, ano_inicio, ano_fim)
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *
    `, 
    [experiencia.titulo, experiencia.instituicao, experiencia.tipo, experiencia.ano_inicio, experiencia.ano_fim]);
    return result.rows[0];
};

exports.updateExperiencias = async (id, experiencia) => {
    const result = await pool.query(`
        UPDATE experiencias
        SET titulo = $1, instituicao = $2, tipo = $3, ano_inicio = $4, ano_fim = $5
        WHERE id = $6
        RETURNING *
    `,
    [experiencia.titulo, experiencia.instituicao, experiencia.tipo, experiencia.ano_inicio, experiencia.ano_fim, id]);
    return result.rows[0];
}; 

exports.deleteExperiencias = async (id) => {
    await pool.query('DELETE FROM experiencias WHERE id = $1', [id]);
};