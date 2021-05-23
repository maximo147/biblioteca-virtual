const { Schema, model } = require('mongoose')

const LibroSchema = new Schema({
    titulo: { type: String, required: [true, 'El titulo es obligatorio'], unique: true },
    img: { type: String, required: [true, 'La imagen es obligatoria'], unique: true },
    isbn: { type: String, default: '999-999-999-99', unique: true },
    idioma: { type: String, default: 'Español' },
    anioPublicaion: { type: Number, required: [true, 'La año es obligatorio'] },
    descripcion: { type: String, default: 'Descripción del libro' },
    precioVenta: { type: Number, default: 0 },
    precioAlquiler: { type: Number, default: 0 },
    descuentoVenta: { type: Number, default: 0 },
    descuentoAlquiler: { type: Number, default: 0 },
    numeroPaginas: { type: Number, default: 0 },
    autor: { type: Schema.Types.ObjectId, ref: 'Autore', required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
    editorial: { type: Schema.Types.ObjectId, ref: 'Editoriale', required: true },

    estado: { type: Boolean, default: true }
})

module.exports = model('Libro', LibroSchema)