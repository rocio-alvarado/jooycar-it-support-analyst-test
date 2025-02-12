const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personas.controller');

// GET /personas - Listar todas las personas
router.get('/', personasController.getPersonas);

// GET /personas/:id - Obtener una persona por ID
router.get('/:id', personasController.getPersonaById);

// POST /personas - Crear una nueva persona
router.post('/', personasController.createPersona);

// PUT /personas/:id - Actualizar una persona
router.put('/:id', personasController.updatePersona);

// DELETE /personas/:id - Eliminar una persona
router.delete('/:id', personasController.deletePersona);

module.exports = router; 