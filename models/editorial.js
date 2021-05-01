const { Schema, model } = require('mongoose')

const EditorialSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    descripcion: { type: String, default: 'Descripción de Editorial' },
    estado: { type: Boolean, default: true }
})

module.exports = model('Editoriale', EditorialSchema)