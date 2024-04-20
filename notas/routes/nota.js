const express = require('express');
const notaController = require('../controllers/nota');
const { verificarToken } = require('../../utils/token');
const router = express.Router();


//router.use(verificarToken); 
router.route('/').post(notaController.crearNota)

module.exports = router;