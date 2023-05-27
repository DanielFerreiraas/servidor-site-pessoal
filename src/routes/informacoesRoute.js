const express = require('express');

const informacoesController = require('../controllers/informacoesController');

const router = express.Router();

router.get('/', informacoesController.getInformacoes);
router.post('/', informacoesController.createInformacoes);
router.delete('/', informacoesController.deleteInformacoes);

module.exports = router;