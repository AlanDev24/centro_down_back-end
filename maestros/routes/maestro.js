const express = require('express');
const maestroController = require('../controllers/maestro');
const { verificarToken } = require('../../utils/token');
const router = express.Router();


//router.use(verificarToken); 

router
.route("/")
.post(maestroController.authUser);


module.exports = router;