const { Schema, model } = require('mongoose')


const VentaSchema = new Schema({
    fechaVenta: { type: Date, required: true },
    tipoPago: { type: String, required: true, enum:['TARJETA_DEBITO', 'PAYPAL', 'MERCADOPAGO'] },
    
    usuario: { type: Schema.Type.ObjectId, ref: 'Usuario', required: true },
    estado: { type: Boolean, default: true }
})

module.exports = model('Venta', VentaSchema)