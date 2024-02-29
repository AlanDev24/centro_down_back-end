const Usuario = require('../models/user');
const tokenc = require("../utils/token");

async function eliminarUsuarioPorCorreo(correo) {
  try {
    // Buscar el usuario por correo
    const usuarioAEliminar = await Usuario.findOne({
      where: {
        correo: correo
      }
    });

    if (usuarioAEliminar) {
      // Eliminar el usuario
      await usuarioAEliminar.destroy();
      console.log('Usuario eliminado correctamente.');
    } else {
      console.log('Usuario no encontrado.');
    }
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
}

// Función para realizar la autenticación y generar el token
async function autenticarUsuario(correo, password) {
  try {
    // Buscar el usuario por correo y contraseña
    const usuario = await Usuario.findOne({
      where: {
        correo: correo,
        password: password
      }
    });

    if (usuario) {
      // Generar el token
      const token = tokenc.generarToken(usuario)
      console.log('Usuario autenticado correctamente.');
      return token;
    } else {
      console.log('Credenciales incorrectas.');
      return null;
    }
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    return null;
  }
}

 module.exports = {eliminarUsuarioPorCorreo, autenticarUsuario}