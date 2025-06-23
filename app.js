const express = require('express');
const app = express();
require('dotenv').config();

const { initDb } = require('./models');
const personaRoutes = require('./routes/persona.routes');

app.use(express.json());
app.use('/api/personas', personaRoutes);

const PORT = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
