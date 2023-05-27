const express = require('express');

const experienciasController = require('../controllers/experienciasController')

const router = express.Router();

router.get('/', experienciasController.getAllExperiencias);

router.get('/:id', experienciasController.getExperienciasById);

module.exports = router;