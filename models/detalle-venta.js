const { Schema, model } = require('mongoose')


const DetalleVentaSchema = new Schema({
    venta: { type: Schema.Types.ObjectId, ref: 'Venta', required: true},
    libro: { type: Schema.Types.ObjectId, ref: 'Libro', required: true },
    
    estado: { type: Boolean, default: true }
})

module.exports = model('DetalleVenta', DetalleVentaSchema)