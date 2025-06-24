const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// 🔥 CORS ANTES de cualquier ruta
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const { initDb } = require('./models');
const personaRoutes = require('./routes/persona.routes');

// 🔥 Registrar rutas DESPUÉS de CORS
app.use('/api/personas', personaRoutes);

const PORT = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});