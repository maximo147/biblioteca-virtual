const { Router } =  require('express')
const router = Router()
const {obtenerBusqueda} = require('../controller/busqueda.controller')

router.post('/', obtenerBusqueda)

module.exports = router