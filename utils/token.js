const jwt = require('jsonwebtoken');

const secreto = '123456';

async function generarToken(maestro){
    // Aquí debes establecer tu secreto (secret) de forma segura
  

  // Crear el token con la información del usuario
  const token = jwt.sign({
    id: maestro.id,
    password: maestro.password
  }, secreto, { expiresIn: '1h' }); // Puedes ajustar el tiempo de expiración según tus necesidades
  return token;
}

const verificarToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }
  
    jwt.verify(token, secreto, (error, decoded) => {
      if (error) {
        return res.status(401).json({ mensaje: 'Token inválido' });
      }
      req.usuario = decoded;
      next();
    });
  };

module.exports = {
  generarToken,verificarToken
}