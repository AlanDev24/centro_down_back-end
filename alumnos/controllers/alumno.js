// controlador.js
const obtenerAlumnos = require('../data/alumno');

async function getAlumnos(req, res) {


  try {
    const result = await obtenerAlumnos.obtenerAlumnos();
    if( !result ) return res.status(404).json({ error:"Alumnos no encontrados"});

    return res.status(200).json({ alumnos: result });
  } catch (error) {
    console.error('Error al obtener alumnos', error);
    res.status(500).json({ mensaje: 'Error interno' });
  }
}


module.exports = {getAlumnos};
