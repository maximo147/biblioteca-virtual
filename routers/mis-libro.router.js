const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')

//Ruta de controladores
const { obtenerObjetos, obtenerObjeto, crearObjeto, modificarObjeto, eliminarObjeto } = require('../controller/mis-libro.controller')

router.get('/', obtenerObjetos)

router.get('/:id', [
    check('id', 'El id no es válido').isMongoId(),

    validarCampos
], obtenerObjeto)

router.post('/', crearObjeto)

router.put('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    
    validarCampos
], modificarObjeto)

router.delete('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    
    validarCampos
], eliminarObjeto)

module.exports = router
