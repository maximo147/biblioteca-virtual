const Favorito = require('../models/favorito')

const obtenerObjetos = async (req, res) => {
    try {
        const favoritos = await Favorito.find({ estado: true })
            .populate('libro', 'titulo')
            .populate('usuario', 'nombreUsuario')
        res.json({
            favoritos
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
        const favorito = await Favorito.find({ usuario: id })
            .populate('libro', 'titulo')
            .populate('usuario', 'nombre')
        res.json({
            id,
            favorito
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
        const { libro, usuario } = req.body
        const favorito = new Favorito({ libro, usuario })
        favorito.save()
        res.json({
            message: 'Favorito añadido'
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
        const { libro, usuario } = req.body
        await Favorito.findByIdAndUpdate(id, { libro, usuario })
        res.json({
            message: 'Favorito modificadopppppppp'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }
}

const modificarObjeto2 = async (req, res) => {
    try {
        const { usuario, libro } = req.body

        const existe = await Favorito.find({ 
            $and: [{ usuario }, { libro }]
        })

        if(!existe){
            return res.status(400).json({message: 'Hubo problemas'})
        }
        
        await Favorito.findByIdAndUpdate(existe[0]._id, {estado: !existe[0].estado})

        res.json({
            message: existe
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
        await Favorito.findByIdAndUpdate(id, { estado: false })
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
    modificarObjeto2,
    eliminarObjeto
}