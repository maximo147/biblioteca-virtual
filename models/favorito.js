const { Schema, model } = require('mongoose')

const FavoritoSchema = new Schema({
    
    libro: { type: Schema.Type.ObjectId, ref: 'Libro', required: true },
    usuario: { type: Schema.Type.ObjectId, ref: 'Usuario', required: true },

    estado: { type: Boolean, default: true }
})

module.exports = model('Favorito', FavoritoSchema)