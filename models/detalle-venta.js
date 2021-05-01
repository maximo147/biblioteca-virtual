const { Schema, model } = require('mongoose')


const DetalleVentaSchema = new Schema({
    venta: { type: Schema.Type.ObjectId, ref: 'Venta', required: true},
    libro: { type: Schema.Type.ObjectId, ref: 'Libro', required: true },
    
    estado: { type: Boolean, default: true }
})

module.exports = model('DetalleVenta', DetalleVentaSchema)