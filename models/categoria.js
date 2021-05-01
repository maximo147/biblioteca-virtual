const { Schema, model } = require('mongoose')

const CategoriaSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    descripcion: { type: String, default: 'Descripción de Categoria' },
    estado: { type: Boolean, default: true }
})

module.exports = model('Categoria', CategoriaSchema)