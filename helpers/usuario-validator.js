const Usuario = require('../models/usuario')

const existeId = async (id) => {
    const existe = await Usuario.findById(id)
    if (!existe) {
        throw new Error('El usuario no existe en la BD')
    } else {
        if (!existe.estado) {
            throw new Error('El usuario está deshabilitado')
        }
    }
}

const existeNombre = async (nombreUsuario) => {
    const existe = await Usuario.findOne({ nombreUsuario })
    if (existe) {
        throw new Error('El nombre existe en la BD')
    }
}

const existeCorreo = async (correo) => {
    const existe = await Usuario.findOne({ correo })
    if (existe) {
        throw new Error('El correo existe en la BD')
    }
}

module.exports = {
    existeId,
    existeNombre,
    existeCorreo
}