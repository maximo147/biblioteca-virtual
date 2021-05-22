const { Schema, model } = require('mongoose')

const Tarjeta = new Schema({
    nombre: {type: String, default: 'USER'},
    numero: {type: String },
    codigo: {type: String },
    fechaVencimiento: { type: String }
})
 
module.exports = model('Tarjeta', Tarjeta)