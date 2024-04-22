// controlador.js
const accesoDatos = require('../data/maestro');

async function authUser(req, res) {
  const id = req.body.id;
  const pass = req.body.password;

  try {
    const result = await accesoDatos.autenticarMaestro(id, pass);
    if (result && result.token && result.maestro) {
      res.status(200).json({ mensaje: 'Autenticación correcta', body: { token: result.token, maestro: result.maestro } });
    } else {
      res.status(400).json({ mensaje: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ mensaje: 'Error interno' });
  }
}


module.exports = {authUser};
