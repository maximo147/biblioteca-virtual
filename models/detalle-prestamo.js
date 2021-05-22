const { Schema, model } = require('mongoose')


const DetallePrestamoSchema = new Schema({
    prestamo: { type: Schema.Types.ObjectId, ref: 'Prestamo', required: true},
    libro: { type: Schema.Types.ObjectId, ref: 'Libro', required: true },
    
    estado: { type: Boolean, default: true }
})

module.exports = model('DetallePrestamo', DetalleVentaSchema)