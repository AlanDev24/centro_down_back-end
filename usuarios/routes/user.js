const express = require('express');
const userController = require('../controllers/user');
const { verificarToken } = require('../../utils/token');
const router = express.Router();


//router.use(verificarToken); 

router
.route("/")
.post(userController.authUser);


router.use(verificarToken)


router
.route('/')
.delete(userController.eliminarUsuario);


module.exports = router;