const Nota = require('../models/nota');
const tokenc = require("../../utils/token");

const crearNota = async ( maestro, alumno, cuerpo )=> {

    try {
        const nuevaNota = await Nota.create( maestro, alumno, cuerpo );
        return nuevaNota;

    } catch (error) {
        console.log(error);
    }

}

 module.exports = {crearNota}