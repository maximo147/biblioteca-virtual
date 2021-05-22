const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario')

const authGET = (req, res) => {
    res.json({
        message: 'OK'
    })
}

const authPOST = async (req, res) => {
    try {
        const { correo, password  } = req.body
        const usuario = await Usuario.findOne({ correo })
        if(!usuario){
            return res.status(400).json({
                message: 'El correo no existe'
            })
        }

        const matchPassword = bcryptjs.compareSync(password, usuario.password )
        if(!matchPassword){
            return res.status(400).json({
                message: 'La contraseña no es válida'
            })
        }

        req.body = usuario

        const { nombreUsuario, _id } = usuario
        res.json({
            _id, correo, nombreUsuario
        })        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error - hable con el administrador'
        })    
    }
}

const authPUT = (req, res) => {
    res.json({
        message: 'OK'
    })
}

const authDELETE = (req, res) => {
    res.json({
        message: 'OK'
    })
}

module.exports = {
    authGET,
    authPOST,
    authPUT,
    authDELETE
}