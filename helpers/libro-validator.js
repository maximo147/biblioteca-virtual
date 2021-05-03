const Libro = require('../models/libro')

const existeId = async (id) => {
    const existe = await Libro.findById(id)
    if(!existe){
        throw new Error('El libro no existe en la BD')
    }else{
        if (!existe.estado) {
            throw new Error('El libro está deshabilitada')
        }
    }
}

const existeTitulo = async (titulo) => {
    const existe = await Libro.findOne({titulo})
    if(existe){
        throw new Error('El titulo existe en la BD')
    }
}

const existeImg = async (img) => {
    const existe = await Libro.findOne({img})
    if(existe){
        throw new Error('La imagen existe en la BD')
    }
}

const existeIsbn = async (isbn) => {
    const existe = await Libro.findOne({isbn})
    if(existe){
        throw new Error('El isbn existe en la BD')
    }
}

module.exports = {
    existeId,
    existeTitulo,
    existeImg,
    existeIsbn
}