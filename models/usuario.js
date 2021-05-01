const { Schema, model } = require('mongoose')

const UsuarioSchema = new Schema({
    nombreUsuario: { type: String, required: [true, 'El nombre de usuario es obligatorio'] },
    nombres: { type: String, required: [true, 'El nombre es obligatorio'] },
    correo: { type: String, required: [true, 'El correo es obligatorio'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria']},
    telefono: { type: String, default: '999-999-999' },
    rol: { type: String, default: 'USUARIO_ROL'},
    estado: { type: String, default: true }
})

module.exports = model('Usuario', UsuarioSchema)