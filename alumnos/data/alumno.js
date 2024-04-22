const Alumno = require('../models/alumno');

async function obtenerAlumnos() {
  try {
    // Buscar alumnos en la bd
    const alumnos = await Alumno.findAll();

    if ( !alumnos ) return null
    return alumnos;
  } catch (error) {
    console.error('Error al buscar alumnos:', error);
    return null;
  }
}
 module.exports =  {obtenerAlumnos}