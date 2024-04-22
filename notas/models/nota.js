// usuarioModel.js
const { DataTypes, INET, INTEGER } = require('sequelize');
const sequelize = require('../../utils/db');

const Nota = sequelize.define('Nota', {
  id:{
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  maestro: {
    type: DataTypes.INTEGER
  },
  alumno: {
    type: DataTypes.INTEGER
  },
  cuerpo: {
    type: DataTypes.STRING
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
