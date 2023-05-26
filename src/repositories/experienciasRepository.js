const { pool}  = require('../config/db');

exports.getAllExperiencias = async (req, res) => {
    const db = await pool.connect();
    try{
        const result = await db.query('SELECT * FROM experiencias');
        return result.rows;
    }catch(error){
        console.log(error);
        return[];
    }finally{
        db.release();
    }
};