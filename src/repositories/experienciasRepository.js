const { pool }  = require('../config/db');

exports.getAllExperiencias = async (tipo) => {
    let query = 'SELECT * FROM experiencias';

    if(tipo){
        query += ` WHERE tipo = '${tipo}'` ;
    }
        const result = await pool.query(query);
        return result.rows;
};

exports.getExperienciasById = async (id) => {
    const result = await pool.query(`SELECT * FROM experiencias WHERE id = $1`, [id]);
    return result.rows[0];
};

exports.createExperiencias = async (experiencia) => {
    const result = await pool.query(`
        INSERT INTO experiencias (titulo, instituicao, tipo, "anoInicio", "anoFim")
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *
    `, 
    [experiencia.titulo, experiencia.instituicao, experiencia.tipo, experiencia.anoInicio, experiencia.anoFim]);
    return result.rows[0];
};

exports.updateExperiencias = async (id, experiencia) => {
    const result = await pool.query(`
        UPDATE experiencias
        SET titulo = $1, instituicao = $2, tipo = $3, "anoInicio" = $4, "anoFim" = $5
        WHERE id = $6
        RETURNING *
    `,
    [experiencia.titulo, experiencia.instituicao, experiencia.tipo, experiencia.anoInicio, experiencia.anoFim, id]);
    return result.rows[0];
}; 

exports.deleteExperiencias = async (id) => {
    await pool.query('DELETE FROM experiencias WHERE id = $1', [id]);
};