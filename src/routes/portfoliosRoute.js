const express = require('express');

const portfoliosController = require('../controllers/portfoliosController');

const router = express.Router();

router.get('/', portfoliosController.gerAllPortfolios);
router.get('/:id', portfoliosController.getProjetoById);
router.post('/cadastro', portfoliosController.createProjeto);
router.put('/:id', portfoliosController.updateProjeto);
router.delete('/:id', portfoliosController.deleteProeto);

module.exports = router;