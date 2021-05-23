const express = require('express')
const cors = require('cors')
const connectDB = require('../database/config')
const bodyParser = require('body-parser');


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        //rutas para modelos
        
        this.authPath = '/api/auth/login'
        this.busquedaPath = '/api/busqueda'
        this.autorPath = '/api/autores'
        this.categoriaPath = '/api/categorias'
        this.detallePrestamoPath = '/api/detalle-prestamos'
        this.detalleVentaPath = '/api/detalle-ventas'
        this.editorialPath = '/api/editoriales'
        this.favoritoPath = '/api/favoritos'
        this.libroPath = '/api/libros'
        this.misLibrosPath = '/api/mis-libros'
        this.prestamoPath = '/api/prestamos'
        this.usuarioPath = '/api/usuarios'
        this.ventaPath = '/api/ventas'
        this.tarjetaPath = '/api/tarjeta'
        
        this.checkoutPath = '/api/checkout'
        
        //database
        this.databaseConnect()

        //middlewares
        this.middlewares()
        //routers
        this.routers()
    }

    async databaseConnect(){
        await connectDB()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
        //middlewares para mercado pago
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }
    
    routers() {
        this.app.use(this.authPath, require('../routers/auth.router'))
        this.app.use(this.busquedaPath, require('../routers/busqueda.router'))
        this.app.use(this.autorPath, require('../routers/autor.router'))
        this.app.use(this.categoriaPath, require('../routers/categoria.router'))
        this.app.use(this.detallePrestamoPath, require('../routers/detalle-prestamo.router'))
        this.app.use(this.detalleVentaPath, require('../routers/detalle-venta.router'))
        this.app.use(this.editorialPath, require('../routers/editorial.router'))
        this.app.use(this.favoritoPath, require('../routers/favorito.router'))
        this.app.use(this.libroPath, require('../routers/libro.router'))
        this.app.use(this.misLibrosPath, require('../routers/mis-libro.router'))
        this.app.use(this.prestamoPath, require('../routers/prestamo.router'))
        this.app.use(this.usuarioPath, require('../routers/usuario.router'))
        this.app.use(this.ventaPath, require('../routers/venta.router'))
        this.app.use(this.checkoutPath, require('../routers/checkout.router'))
        this.app.use(this.tarjetaPath, require('../routers/tarjeta.router'))

    }

    listen() {
        this.app.listen(this.port, console.log('Escuchando en puerto', this.port))
    }
}

module.exports = Server