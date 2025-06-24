const express = require('express');
const router = express.Router();
const controller = require('../controllers/persona.controller');

router.get('/', controller.listarPersonas);
router.get('/:id', controller.obtenerPersonaPorId);
router.post('/', controller.crearPersona);
router.put('/:id', controller.actualizarPersona);
router.delete('/:id', controller.eliminarPersona);

module.exports = router;