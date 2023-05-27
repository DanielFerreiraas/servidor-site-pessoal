const express = require('express');

const experienciasController = require('../controllers/experienciasController')

const router = express.Router();

router.get('/', experienciasController.getAllExperiencias);
router.get('/:id', experienciasController.getExperienciasById);
router.post('/', experienciasController.createExperiencias);
router.put('/:id', experienciasController.updateExperiencias);
router.delete('/:id', experienciasController.deleteExperiencias);

module.exports = router;