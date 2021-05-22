const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')

//Ruta de controladores
const { obtenerObjetos, obtenerObjeto, crearObjeto, modificarObjeto, eliminarObjeto } = require('../controller/usuario.controller')

//
const { existeId, existeNombre, existeCorreo } = require('../helpers/usuario-validator')

router.get('/', obtenerObjetos)

router.get('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    validarCampos
], obtenerObjeto)

router.post('/', [
    check('nombreUsuario', 'El nombre de usuario es obligatorio'),
    check('nombreUsuario').custom(existeNombre),
    check('correo', 'El correo es obligatorio'),

    check('correo').custom(existeCorreo),

    validarCampos
], crearObjeto)

router.put('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    check('nombreUsuario', 'El nombre de usuario es obligatorio'),
    check('nombreUsuario').custom(existeNombre),
    check('correo', 'El correo es obligatorio'),
    check('correo').custom(existeCorreo),

    validarCampos
], modificarObjeto)

router.delete('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(existeId),
    
    validarCampos
], eliminarObjeto)

module.exports = router
