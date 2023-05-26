const express = require('express');
const { pool } = require('../config/db');

const router = express.Router();

router.get('/', async (req, res) => {
    const db = await pool.connect();
    try{
        const result = await db.query('SELECT * FROM experiencias');
        res.json(result.rows);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Erro ao consultar experiências'});
    }finally{
        db.release();
    }
});

module.exports = router;