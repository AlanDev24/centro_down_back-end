// usuarioModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/db');

const Alumno = sequelize.define('Alumno', {
  idAlumno: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    field: 'id_alumno'
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nombre' // Esta línea especifica el nombre del campo en la base de datos
  },  
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'alumnos', // Nombre de la tabla en la base de datos
  updatedAt: false // Si no tienes la columna 'updatedAt', puedes deshabilitarla
});

module.exports = Alumno;
