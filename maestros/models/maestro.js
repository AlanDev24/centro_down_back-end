// usuarioModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db');

const Maestro = sequelize.define('Maestro', {
  idMaestro: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    field: 'id_maestro'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagenPerfil: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'imagen_perfil' // Esta línea especifica el nombre del campo en la base de datos
  },  
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'maestros', // Nombre de la tabla en la base de datos
  updatedAt: false // Si no tienes la columna 'updatedAt', puedes deshabilitarla
});

module.exports = Maestro;
