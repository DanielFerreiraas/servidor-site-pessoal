const express = require('express');

const informacoesController = require('../controllers/informacoesController');

const router = express.Router();

router.get('/', informacoesController.getInformacoes);
router.post('/inserir', informacoesController.createInformacoes);
router.delete('/:id', informacoesController.deleteInformacoes);

module.exports = router;