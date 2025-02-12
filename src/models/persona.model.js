const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  region: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false,
  toJSON: {
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

module.exports = mongoose.model('Persona', personaSchema); 