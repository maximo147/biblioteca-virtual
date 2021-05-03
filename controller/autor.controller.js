const Autor = require('../models/autor')

const obtenerObjetos = async (req, res) => {
    try {
        const autores = await Autor.find({ estado: true })
        res.json({
            autores
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
        const autor = await Autor.findById(id)
        res.json({
            autor
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

const crearObjeto = async (req, res) => {
    try {
        const { nombre, pais } = req.body
        const autor = new Autor({ nombre, pais })
        await autor.save()
        res.json({
            message: 'El autor se ha creado existosamente'
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
        const { id } = req.params
        const { nombre, pais } = req.body
        await Autor.findByIdAndUpdate(id, { nombre, pais })
        res.json({
            message: 'El autor se ha actualizado existosamente'
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
        const { id } = req.params
        await Autor.findByIdAndUpdate(id, { estado: false })
        res.json({
            message: 'El autor se ha eliminado existosamente'
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