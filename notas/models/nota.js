// usuarioModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db');

const Nota = sequelize.define('Nota', {
  maestro: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  alumno: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cuerpo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'notas', // Nombre de la tabla en la base de datos
  updatedAt: false // Si no tienes la columna 'updatedAt', puedes deshabilitarla
});

module.exports = Nota;
