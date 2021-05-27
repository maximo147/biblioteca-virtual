const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')

const obtenerObjetos = async (req, res) => {
    try {
        const usuarios = await Usuario.find({ estado: true })
        res.json({
            usuarios
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
        const usuario = await Usuario.findById(id)
        res.json({
            usuario
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
        const { nombreUsuario, correo, nombres,
            password, telefono, rol } = req.body
        const usuario = new Usuario({ nombreUsuario, correo, nombres, password, telefono, rol })
        var salt = bcryptjs.genSaltSync(10);
        usuario.password = bcryptjs.hashSync(password, salt);
        await usuario.save()
        const { _id } = usuario
        res.json({
            _id, nombreUsuario, correo, rol
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
        const { nombreUsuario, correo, nombres,
            password, telefono } = req.body

        const salt = bcryptjs.genSaltSync(10);
        const password2 = bcryptjs.hashSync(password, salt);

        await Usuario.findByIdAndUpdate(id, { nombreUsuario, correo, nombres, telefono })
        res.json({
            message: 'El usuario se modificó exitosamente'
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
        await Usuario.findByIdAndUpdate(id, { estado: false })
        res.json({
            message: 'El usuario se eliminó exitosamente'
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