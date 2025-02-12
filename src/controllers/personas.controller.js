const Persona = require('../models/persona.model');
const mongoose = require('mongoose');

// GET /personas - Listar todas las personas con filtros opcionales
exports.getPersonas = async (req, res) => {
  try {
    const { edad, region } = req.query;
    let query = {};
    
    if (edad) query.edad = edad;
    if (region) query.region = region;
    
    const personas = await Persona.find(query);
    res.json(personas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /personas/:id - Obtener una persona por ID
exports.getPersonaById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el ID tiene el formato correcto de MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ 
        message: 'Persona no encontrada'
      });
    }

    const persona = await Persona.findById(id);
    if (!persona) {
      return res.status(404).json({ 
        message: 'Persona no encontrada'
      });
    }
    
    res.json(persona);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// POST /personas - Crear una nueva persona
exports.createPersona = async (req, res) => {
  try {
    const persona = new Persona(req.body);
    const nuevaPersona = await persona.save();
    res.status(201).json(nuevaPersona);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /personas/:id - Actualizar una persona
exports.updatePersona = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el ID tiene el formato correcto de MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ 
        message: 'Persona no encontrada'
      });
    }

    const persona = await Persona.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!persona) {
      return res.status(404).json({ 
        message: 'Persona no encontrada'
      });
    }
    
    res.json(persona);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /personas/:id - Eliminar una persona
exports.deletePersona = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el ID tiene el formato correcto de MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ 
        message: 'Persona no encontrada'
      });
    }

    const persona = await Persona.findByIdAndDelete(id);
    if (!persona) {
      return res.status(404).json({ 
        message: 'Persona no encontrada'
      });
    }
    
    res.json({ message: 'Persona eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 