const express = require('express');
const router = express.Router();
const service = require('../services/persona.service');

router.get('/', async (req, res) => {
  const personas = await service.getAll();
  res.json(personas);
});

router.get('/:id', async (req, res) => {
  const persona = await service.getById(req.params.id);
  persona ? res.json(persona) : res.status(404).send('No encontrada');
});

router.post('/', async (req, res) => {
  try {
    const nueva = await service.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const actualizada = await service.update(req.params.id, req.body);
    actualizada
      ? res.json(actualizada)
      : res.status(404).send('No encontrada');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const eliminada = await service.remove(req.params.id);
  eliminada ? res.status(204).send() : res.status(404).send('No encontrada');
});

module.exports = router;