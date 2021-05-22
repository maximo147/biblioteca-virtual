const Tarjeta = require('../models/tarjeta')



const obtenerObjeto = async (req, res) => {
    try {
        const nombre = req.body.nombre.toUpperCase()
        const { numero, codigo, fechaVencimiento } = req.body
        // const tarjeta = new Tarjeta({ nombre, numero, codigo, fechaVencimiento })
        // tarjeta.save()
        const tarjeta = await Tarjeta.findOne({ numero })
        if (!tarjeta) {
            return res.status(400).json({
                message: "Datos incorrectos"
            })
        }
        if (!(tarjeta.fechaVencimiento === fechaVencimiento)) {
            return res.status(400).json({
                message: "Datos incorrectos"
            })
        }

        if (!(tarjeta.codigo === codigo)) {
            return res.status(400).json({
                message: "Datos incorrectos"
            })
        }

        if (!(tarjeta.nombre === nombre)) {
            return res.status(400).json({
                message: "Datos incorrectos"
            })
        }

        if (!(tarjeta.numero === numero)) {
            return res.status(400).json({
                message: "Datos incorrectos"
            })
        }

        res.json({
            message: "OK"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}


module.exports = {
    obtenerObjeto
}