const Editorial = require('../models/editorial')

const obtenerObjetos = async (req, res) => {
    try {
        const editoriales = await Editorial.find({ estado: true })
        res.json({
            editoriales
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
        const editorial = await Editorial.findById(id)
        res.json({
            editorial
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
        const { nombre, descripcion } = req.body
        const editorial = new Editorial({ nombre, descripcion })
        editorial.save()
        res.json({
            message: 'La editorial se ha creado existosamente'
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
        const { nombre, descripcion } = req.body
        await Editorial.findByIdAndUpdate(id, { nombre, descripcion })
        res.json({
            message: 'La editorial se ha actualizado existosamente'
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
        await Editorial.findByIdAndUpdate(id, { estado: false })
        res.json({
            message: 'La editorial se ha eliminado existosamente'
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