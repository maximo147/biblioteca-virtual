const Mislibro = require('../models/mis-libros')

const obtenerObjetos = async (req, res) => {
    try {
        res.json({
            message: 'Todo OK'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

const obtenerObjeto = async (req, res) => {
    try {
        const { id } = req.params
        const mislibros = await Mislibro.find({ usuario: id })
            .populate('libro', 'titulo')
            .populate('usuario', 'nombre')
        res.json({
            id,
            mislibros
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

const crearObjeto = async (req, res) => {
    const {libro, usuario, estadoLibro} = req.body
    const mislibros = new Mislibro({libro, usuario, estadoLibro})
    mislibros.save()
    try {
        res.json({
            message: 'Mi Libro añadido'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

const modificarObjeto = async (req, res) => {
    try {
        res.json({
            message: 'Todo OK'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

const eliminarObjeto = async (req, res) => {
    try {
        res.json({
            message: 'Todo OK'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

module.exports = {
    obtenerObjetos,
    obtenerObjeto,
    crearObjeto,
    modificarObjeto,
    eliminarObjeto
}