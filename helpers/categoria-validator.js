const Categoria = require('../models/categoria')

const existeId = async (id) => {
    const existe = await Categoria.findById(id)
    if (!existe){
        throw new Error('La categoría no existe en la BD')
    }else{
        if (!existe.estado) {
            throw new Error('La categoría está deshabilitada')
        }
    }
}

const existeNombre = async (nombre) => {
    const existe = await Categoria.findOne({ nombre })
    if(existe){
        throw new Error('El nombre ya está registrado')
    }
}

module.exports = {
    existeId,
    existeNombre
}