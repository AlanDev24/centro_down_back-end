const express = require('express');
const alumnoController = require('../controllers/alumno');
const router = express.Router();


//router.use(verificarToken); 

router
.route("/")
.get(alumnoController.getAlumnos);


module.exports = router;