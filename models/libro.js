const { Schema, model } = require('mongoose')

const LibroSchema = new Schema({
    titulo: { type: String, required: [true, 'El titulo es obligatorio'] },
    idioma: { type: String, default: 'Español' },
    url: { type: String, required: [true, 'La url es obligatoria']},
    img: { type: String, required: [true, 'La imagen es obligatoria'] },
    anioPublicaion: { type: Number, required: [true, 'La año es obligatorio'] },
    isbn: { type: String, default: '999-999-999-99' },
    precio: { type: Number, default: 0 },
    descuento: { type: Number, default: 0 },

    autor: { type: Schema.Types.ObjectId, ref: 'Autore', required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
    editorial: { type: Schema.Types.ObjectId, ref: 'Editoriale', required: true },
    
    estado: { type: Boolean, default: true }
})

module.exports = model('Libro', LibroSchema)