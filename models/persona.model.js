const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Persona = sequelize.define('Persona', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  direccion: {
    type: DataTypes.TEXT,
  },
  tipoDocumento: {
    type: DataTypes.STRING,
    allowNull: true, // Permitido temporalmente para evitar error
  },
  documento: {
    type: DataTypes.STRING,
    allowNull: true, // Permitido temporalmente
    unique: true,
  },
});

module.exports = Persona;