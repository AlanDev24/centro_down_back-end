// app.js
const express = require('express');
const alumno = require("./routes/alumno")
const cors = require('cors');

const app = express();
const puerto = 3003;

app.use(cors());


app.use(express.json());

app.use("/alumnos",alumno);

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});