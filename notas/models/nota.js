const { DataTypes, INET, INTEGER } = require('sequelize');
const sequelize = require('../../utils/db');
const Alumno = require('../../alumnos/models/alumno'); // Importar el modelo de Alumno
const Maestro = require('../../maestros/models/maestro'); // Importar el modelo de Maestro

const Nota = sequelize.define('Nota', {
  idNota:{
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'id_nota'
  },
  idMaestro: { // Cambiar a 'maestroId' para representar la clave foránea
    type: DataTypes.INTEGER,
    references: {
      model: Maestro, // Hace referencia al modelo de Maestro
      key: 'id_maestro' // Columna de la tabla Maestro que se está referenciando
    },
    field: 'id_maestro'
  },
  idAlumno: { // Cambiar a 'alumnoId' para representar la clave foránea
    type: DataTypes.INTEGER,
    references: {
      model: Alumno, // Hace referencia al modelo de Alumno
      key: 'id_alumnno' // Columna de la tabla Alumno que se está referenciando
    },
    field: 'id_alumno'
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

// Definir las relaciones entre los modelos
Nota.belongsTo(Maestro, { foreignKey: 'id_maestro', as: 'maestro' });
Nota.belongsTo(Alumno, { foreignKey: 'id_alumno', as: 'alumno' });

module.exports = Nota;