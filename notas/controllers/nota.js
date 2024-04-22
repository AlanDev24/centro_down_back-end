// controlador.js
const accesoDatos = require('../data/nota');

const crearNota = async (req, res)=>{

    try {
    const { maestro, alumno, cuerpo } = req.body;
    const notaNueva = await accesoDatos.crearNota(maestro, alumno, cuerpo);

    res.status(201).json(notaNueva);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

module.exports = {
    crearNota
}