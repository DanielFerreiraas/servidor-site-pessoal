const express = require('express');

const informacoesController = require('../controllers/informacoesController');

const router = express.Router();

router.get('/1', informacoesController.getInformacoes);
router.post('/', informacoesController.createInformacoes);
router.delete('/1', informacoesController.deleteInformacoes);
router.put('/1', informacoesController.updateInformacoes);

module.exports = router;