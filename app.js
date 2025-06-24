const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// ✅ CORS correctamente configurado
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://formulariobecas.netlify.app' // sin /personas
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const { initDb } = require('./models');
const personaRoutes = require('./routes/persona.routes');

app.use('/api/personas', personaRoutes);

const PORT = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});