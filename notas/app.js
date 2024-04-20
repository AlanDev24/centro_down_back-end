// app.js
const express = require('express');
const controlador = require('./controllers/nota');
const nota = require("./routes/nota")
const cors = require('cors');

const app = express();
const puerto = 3001;

app.use(cors());


app.use(express.json());

app.use("/notas",nota);

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
