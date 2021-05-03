const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')

//Ruta de controladores
const { obtenerObjetos, obtenerObjeto, crearObjeto, modificarObjeto, eliminarObjeto } = require('../controller/libro.controller')

//
const { existeId, existeTitulo, existeImg, existeIsbn } = require('../helpers/libro-validator')

router.get('/', obtenerObjetos)

router.get('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),

    validarCampos
], obtenerObjeto)

router.post('/', [
    check('titulo', 'El titulo es obligatorio').not().isEmpty(),
    check('titulo').custom(existeTitulo),
    check('img', 'El titulo es obligatorio').not().isEmpty(),
    check('img').custom(existeImg),
    check('isbn', 'El titulo es obligatorio').not().isEmpty(),
    check('isbn').custom(existeIsbn),

    validarCampos
], crearObjeto)

router.put('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    check('titulo', 'El titulo es obligatorio').not().isEmpty(),
    check('titulo').custom(existeTitulo),
    check('img', 'La imagen es obligatoria').not().isEmpty(),
    check('img').custom(existeImg),
    check('isbn', 'La ISBN es obligatoria').not().isEmpty(),
    check('isbn').custom(existeIsbn),

    validarCampos
], modificarObjeto)

router.delete('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    
    validarCampos
], eliminarObjeto)

module.exports = router
