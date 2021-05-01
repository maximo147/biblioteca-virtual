const { Schema, model } = require('mongoose')

const AutorSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    pais: { type: String, default: 'Perú' },
    estado: { type: Boolean, default: true }
})

module.exports = model('Autore', AutorSchema)