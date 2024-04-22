const Maestro = require('../models/maestro');
const tokenc = require("../../utils/token");

async function autenticarMaestro(id, password) {
  try {
    // Buscar el maestro por id y contraseña
    const maestro = await Maestro.findOne({
      where: {
        id_maestro: id,
        password: password
      }
    });

    if (maestro) {
      // Generar el token y esperar a que se resuelva la promesa
      const token = await tokenc.generarToken(maestro);
      console.log('Maestro autenticado correctamente.');
      return {
        token: token,
        maestro: {
          id:maestro.idMaestro,
          imagenPerfil:maestro.imagenPerfil
        }
      };
    } else {
      console.log('Credenciales incorrectas.');
      return null;
    }
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    return null;
  }
}
 module.exports =  {autenticarMaestro}