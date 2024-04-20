// app.js
const express = require('express');
const controlador = require('./controllers/user');
const user = require("./routes/user")
const cors = require('cors');

const app = express();
const puerto = 3000;

app.use(cors());


app.use(express.json());

// Endpoint para eliminar un usuario
//app.delete('/usuarios/:correo', controlador.eliminarUsuario);
app.use("/usuarios",user);

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
