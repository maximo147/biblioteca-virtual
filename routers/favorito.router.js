const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')

//Ruta de controladores
const { obtenerObjetos, obtenerObjeto, crearObjeto, modificarObjeto, eliminarObjeto } = require('../controller/favorito.controller')

//
const { existeId, validarLibroUser } = require('../helpers/favorito-validator')

router.get('/', obtenerObjetos)

router.get('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    validarCampos
], obtenerObjeto)

router.post('/', [
    check('libro', 'El libro es obligatorio').not().isEmpty(),
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('libro', 'usuario').custom(validarLibroUser),

    validarCampos
], crearObjeto)

router.put('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    validarCampos
], modificarObjeto)

router.delete('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    
    validarCampos
], eliminarObjeto)

module.exports = router
