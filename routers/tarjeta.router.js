const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')

//Ruta de controladores
const {  obtenerObjeto } = require('../controller/tarjeta.controller')

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('numero', 'El numero es obligatorio').not().isEmpty(),
    check('codigo', 'El codigo es obligatorio').not().isEmpty(),
    check('fechaVencimiento', 'La fecha es obligatoria').not().isEmpty(),
    validarCampos
], obtenerObjeto)

module.exports = router