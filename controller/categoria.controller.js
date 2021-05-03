const Categoria = require('../models/categoria')

const obtenerObjetos = async (req, res) => {
    try {
        const categorias = await Categoria.find({ estado: true })
        res.json({
            categorias
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
        const categoria = await Categoria.findById(id)
        res.json({
            categoria
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
        const categoria = new Categoria({ nombre, descripcion })
        await categoria.save()
        res.json({
            message: 'La categoría se ha creado existosamente'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'La categoria se ha creado existosamente'
        })
    }
}

const modificarObjeto = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, descripcion } = req.body
        await Categoria.findByIdAndUpdate(id, { nombre, descripcion })
        res.json({
            message: 'La categoría se ha actualizado existosamente'
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
        await Categoria.findByIdAndUpdate(id, { estado: false })
        res.json({
            message: 'La categoría se ha eliminado existosamente'
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