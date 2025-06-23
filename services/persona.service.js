const { Persona } = require('../models');
const PersonaDTO = require('../dtos/persona.dto');

const getAll = async () => await Persona.findAll();

const getById = async (id) => await Persona.findByPk(id);

const create = async (dto) => {
  const nueva = PersonaDTO(dto.nombre, dto.email, dto.direccion);
  return await Persona.create(nueva);
};

const update = async (id, dto) => {
  const persona = await Persona.findByPk(id);
  if (!persona) return null;
  const datosActualizados = PersonaDTO(dto.nombre, dto.email, dto.direccion);
  return await persona.update(datosActualizados);
};

const remove = async (id) => {
  const persona = await Persona.findByPk(id);
  if (!persona) return null;
  await persona.destroy();
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};