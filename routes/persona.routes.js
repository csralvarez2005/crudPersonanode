const express = require('express');
const router = express.Router();
const personaController = require('../controllers/persona.controller');

router.use('/', personaController);

module.exports = router;