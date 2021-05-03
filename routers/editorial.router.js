const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')

//Ruta de controladores
const { obtenerObjetos, obtenerObjeto, crearObjeto, modificarObjeto, eliminarObjeto } = require('../controller/editorial.controller')

//Ruta de validadores
const { existeId, existeNombre } = require('../helpers/editorial-validator')

router.get('/', obtenerObjetos)

router.get('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    validarCampos
], obtenerObjeto)

router.post('/', [
    check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
    check('nombre').custom(existeNombre),

    validarCampos
], crearObjeto)

router.put('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
    check('nombre').custom(existeNombre),
    
    validarCampos
], modificarObjeto)

router.delete('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),

    validarCampos
], eliminarObjeto)

module.exports = router
