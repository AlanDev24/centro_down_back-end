// usuarioModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db');

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'usuarios', // Nombre de la tabla en la base de datos
  updatedAt: false // Si no tienes la columna 'updatedAt', puedes deshabilitarla
});

module.exports = Usuario;
