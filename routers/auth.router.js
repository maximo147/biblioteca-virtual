const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()
const { authGET, authPOST, authPUT, authDELETE } = require('../controller/auth.controller')
const validarCampos = require('../middlewares/validar-campos')

// const { correoValidator } = require('../helpers/usuario-validator')



router.get('/', authGET)

router.post('/', [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    // check('correo').custom(correoValidator),
    validarCampos
], authPOST)

router.put('/', authPUT)

router.delete('/', authDELETE)

module.exports = router