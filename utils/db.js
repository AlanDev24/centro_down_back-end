// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('prueba', 'prueba', '123456', {
  host: '10.2.60.115',
  dialect: 'mysql'
});

module.exports = sequelize;
