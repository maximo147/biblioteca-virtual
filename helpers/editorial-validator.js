const Editorial = require('../models/editorial')

const existeId = async (id) => {
    const existe = await Editorial.findById(id)
    if (!existe){
        throw new Error('La editorial no existe en la BD')
    }else{
        if (!existe.estado) {
            throw new Error('La editorial está deshabilitada')
        }
    }
}

const existeNombre = async (nombre) => {
    const existe = await Editorial.findOne({ nombre })
    if(existe){
        throw new Error('El nombre ya está registrado')
    }
}

module.exports = {
    existeId,
    existeNombre
}