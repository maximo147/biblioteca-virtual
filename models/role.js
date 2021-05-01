const { Schema, model } = require('mongoose')

const Role = new Schema({
    rol: { type: String, require: true, default: 'INVITADO_ROL'}
})
 
module.exports = model('Role', Role)