const Favorito = require('../models/favorito')


const existeId = async (id) => {
    const existe = await Favorito.findById(id)
    if (!existe) {
        throw new Error('Favorito no existe en la BD')
    } else {
        if (!existe.estado) {
            throw new Error('Favorito está deshabilitada')
        }
    }
}

// const validarLibroUser = async (libro, usuario) => {
//     const existeLibro = await Favorito.findOne({ libro })
//     const existeUser = await Favorito.findOne({ usuario })
//     if(existeLibro && existeUser){
//         throw new Error('Ya existe favorito')
//     }
// }

module.exports = {
    existeId
    // validarLibroUser
}