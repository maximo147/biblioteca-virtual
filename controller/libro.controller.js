const Libro = require('../models/libro')

const obtenerObjetos = async (req, res) => {
    try {
        const {title} = req.body

        const libros = await Libro.find({ titulo: { $regex: `.*${title}.*` } })
            .populate('editorial', 'nombre')
            .populate('categoria', 'nombre')
            .populate('autor', 'nombre')

        res.json({
            libros
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
        const libro = await Libro.findById(id)
            .populate('editorial', 'nombre')
            .populate('categoria', 'nombre')
            .populate('autor', 'nombre')
        res.json(libro)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

const crearObjeto = async (req, res) => {
    try {
        const titulo = req.body.titulo.toUpperCase()
        const { img, isbn, idioma,
            anioPublicaion, descripcion, precioVenta,
            precioAlquiler, descuentoVenta, descuentoAlquiler, 
            numeroPaginas, descuento, autor, categoria, 
            editorial } = req.body
        const libro = new Libro({ titulo, img, isbn, idioma,
            anioPublicaion, descripcion, precioVenta,
            precioAlquiler, descuentoVenta, descuentoAlquiler, 
            numeroPaginas, descuento, autor, categoria, 
            editorial })

        await libro.save()
        res.json({
            message: 'El libro se ha creado exitosamente'
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
        const { titulo, img, isbn, idioma,
            anioPublicaion, descripcion, precio,
            descuento, autor, categoria, editorial } = req.body
        await Libro.findByIdAndUpdate(id, {
            titulo, img, isbn, idioma,
            anioPublicaion, descripcion, precio,
            descuento, autor, categoria, editorial
        })

        res.json({
            message: 'El libro se actualizó exitosamente'
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
        await Libro.findByIdAndUpdate(id, { estado: false })
        res.json({
            message: 'El libro se eliminó exitosamente'
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