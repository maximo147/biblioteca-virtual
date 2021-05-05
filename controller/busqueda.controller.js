
const { ObjectId } = require('mongoose').Types
const Usuario = require('../models/usuario')
const Libro = require('../models/libro')

const coleccionesPermitidas = [
    'usuario',
    'libro',
    'categoria'
]

const buscarUsuario = async (termino, res) => {
    try {
        const isMongoId = ObjectId.isValid(termino)
        if(isMongoId){
            const usuario = await Usuario.findById(termino)
            return res.status(200).json({
                results: (usuario) ? [usuario] : []
            })
        }
        const regex = new RegExp(termino, 'i')
        const usuarios = await Usuario.find({ 
            $or: [{ nombreUsuario: regex }, { correo: regex }],
            $and: [{ estado: true }]
        })
        res.status(200).json({
            results: (usuarios) ? [usuarios] : []
        })        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el Admin'
        })
    }

}


const buscarLibro = async (termino, res) => {
    try {
        const isMongoId = ObjectId.isValid(termino)
        if(isMongoId){
            const libro = await Libro.findById(termino)
            const results =  (libro) ? [libro] : []
            return res.status(200).json(
                results
            )
        }
        const regex = new RegExp(termino, 'i')
        const libros = await Libro.find({ 
            $or: [
                { titulo: regex }, 
                { descripcion: regex },
                { idioma: regex }, 
                // { precio: regex },
                // { titulo: regex }, 
                // { anioPublicion: regex }
                ],
            $and: [{ estado: true }]
        }).populate('autor', 'nombre')
        .populate('categoria', 'nombre')

        const results1 = (libros) ? [libros] : []
        res.status(200).json(results1)        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el Admin'
        })     
    }
}


const obtenerBusqueda = async (req, res) => {
    try {
        const { coleccion, termino } = req.body
        if (!coleccionesPermitidas.includes(coleccion)) {
            return res.status(400).json({ 
                message: 'No es una coleccion válida'
            })
        }
        switch (coleccion) {
            case 'usuario':
                buscarUsuario(termino, res)
                break
            case 'libro':
                buscarLibro(termino, res)
                break
            case 'categoria':
            break
            default:
                res.status(500).json({
                    message: 'No hay una busqueda'
                })
        }     
    } catch (error) {
        
    }
}

module.exports = {
    obtenerBusqueda
}