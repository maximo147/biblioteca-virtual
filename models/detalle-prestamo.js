const { Schema, model } = require('mongoose')


const DetallePrestamoSchema = new Schema({
    prestamo: { type: Schema.Type.ObjectId, ref: 'Prestamo', required: true},
    libro: { type: Schema.Type.ObjectId, ref: 'Libro', required: true },
    
    estado: { type: Boolean, default: true }
})

module.exports = model('DetallePrestamo', DetalleVentaSchema)