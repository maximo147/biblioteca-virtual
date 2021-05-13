const { Schema, model } = require('mongoose')


const MislibroSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    libro: { type: Schema.Types.ObjectId, ref: 'Libro', required: true },
    estadoLibro: { type: String, required: true, enum:['LIBRE', 'PRESTADO', 'COMPRADO'] },

    estado: { type: Boolean, default: true }
})

module.exports = model('Mislibro', MislibroSchema)