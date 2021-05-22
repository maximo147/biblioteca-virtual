const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')

//Ruta de controladores
const { obtenerObjetos, obtenerObjeto, crearObjeto, modificarObjeto, eliminarObjeto } = require('../controller/venta.controller')

router.get('/', obtenerObjetos)

router.get('/:id', [
    check('id', 'El id no es válido').isMongoId(),

    validarCampos
], obtenerObjeto)

router.post('/',[
    check('precioVenta', 'El precio es Obligatorio').not().isEmpty(),
    check('usuario', 'El id de usuario no es válido').isMongoId(),
], crearObjeto)

router.put('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    
    validarCampos
], modificarObjeto)

router.delete('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    
    validarCampos
], eliminarObjeto)

module.exports = router
