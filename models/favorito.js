const { Schema, model } = require('mongoose')

const FavoritoSchema = new Schema({
    
    libro: { type: Schema.Types.ObjectId, ref: 'Libro', required: true },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },

    estado: { type: Boolean, default: true }
})

module.exports = model('Favorito', FavoritoSchema)