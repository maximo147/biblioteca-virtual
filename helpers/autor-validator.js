const Autor = require('../models/autor')

const existeId = async (id) => {
    const existe = await Autor.findById(id)
    if (!existe) {
        throw new Error('El autor no existe en la BD')
    } else {
        if (!existe.estado) {
            throw new Error('El autor está deshabilitado')
        }
    }
}

const existeNombre = async (nombre) => {
    const existe = await Autor.findOne({ nombre })
    if(existe){
        throw new Error('El nombre ya está registrado')
    }
}

module.exports = {
    existeId,
    existeNombre
}