// app.js
const express = require('express');
const controlador = require('./controllers/maestro');
const maestro = require("./routes/maestro")
const cors = require('cors');

const app = express();
const puerto = 3002;

app.use(cors());


app.use(express.json());

app.use("/maestros",maestro);

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
