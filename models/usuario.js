const { Schema, model } = require('mongoose')

const UsuarioSchema = new Schema({
    nombreUsuario: { type: String, required: [true, 'El nombre de usuario es obligatorio'], unique: true},
    correo: { type: String, required: [true, 'El correo es obligatorio'], unique: true },

    nombres: { type: String },
    password: { type: String },
    telefono: { type: String, default: '999-999-999' },
    rol: { type: String, default: 'USUARIO_ROL'},

    estado: { type: Boolean, default: true }
})

module.exports = model('Usuario', UsuarioSchema)