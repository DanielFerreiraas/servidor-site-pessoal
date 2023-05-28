const express = require('express');

const usuariosController = require('../controllers/authController');

const router = express.Router();

router.post('/login', usuariosController.login);

module.exports = router;
