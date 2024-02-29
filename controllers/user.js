// controlador.js
const accesoDatos = require('../data/user');

async function eliminarUsuario(req, res) {
  const correoUsuarioEliminar = req.params.correo;

  try {
    await accesoDatos.eliminarUsuarioPorCorreo(correoUsuarioEliminar);
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error en el controlador:', error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
  }
}

async function authUser(req,res){
  const correo = req.body.correo
  const pass = req.body.password

  try {
    const token = await accesoDatos.autenticarUsuario(correo,pass);
    if(token){
      res.status(200).json({ mensaje: 'Autenticación correcta', body: token });
    }else{
      res.status(400).json({ mensaje: 'fail' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno' });
  }
}

module.exports = {
  eliminarUsuario,authUser
};
