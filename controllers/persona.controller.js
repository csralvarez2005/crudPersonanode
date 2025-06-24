const express = require('express');
const router = express.Router();
const service = require('../services/persona.service');

exports.listarPersonas = async (req, res) => {
  try {
    const personas = await service.getAll();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerPersonaPorId = async (req, res) => {
  try {
    const persona = await service.getById(req.params.id);
    persona ? res.json(persona) : res.status(404).send('No encontrada');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearPersona = async (req, res) => {
  try {
    const nueva = await service.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.actualizarPersona = async (req, res) => {
  try {
    const actualizada = await service.update(req.params.id, req.body);
    actualizada
      ? res.json(actualizada)
      : res.status(404).send('No encontrada');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarPersona = async (req, res) => {
  try {
    const eliminada = await service.remove(req.params.id);
    eliminada
      ? res.status(204).send()
      : res.status(404).send('No encontrada');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
