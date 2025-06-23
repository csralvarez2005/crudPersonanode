const sequelize = require('../config/db');
const Persona = require('./persona.model');

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');

    await sequelize.sync({ alter: true }); // Crea o actualiza tablas automáticamente
    console.log('Modelos sincronizados.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

module.exports = { initDb, Persona };