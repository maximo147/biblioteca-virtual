const Venta = require('../models/venta')


const obtenerObjetos = (req, res) => {
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

const obtenerObjeto = (req, res) => {
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

const crearObjeto = (req, res) => {
    try {
        const { fechaVenta, tipoPago, total, usuario } = req.body
        const venta = new Venta({ fechaVenta, tipoPago, total, usuario })
        venta.save()
        res.json({
            message: 'Venta añadida'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

const modificarObjeto = (req, res) => {
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

const eliminarObjeto = (req, res) => {
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