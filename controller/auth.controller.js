const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario')
const { request, response } = require('express')

const authGET = (req, res) => {
    res.json({
        message: 'OK'
    })
}

const authPOST = async (req, res ) => {
    try {
        const { correo, password  } = req.body
        const usuario = await Usuario.findOne({ correo })
        if(!usuario){
            return res.status(400).send({
                message: 'El correo no existe'
            })
            res.end();
        }

        const matchPassword = bcryptjs.compareSync(password, usuario.password )
        if(!matchPassword){
            return res.status(400).send('La contraseña no es válida')
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