const { Schema, model } = require('mongoose')


const PrestamoSchema = new Schema({
    fechaPrestamo: { type: Date, required: true },
    fechaDevolucion: { type: Date, required: true },
    dias: { type: Number },
    tipoPago: { type: String, required: true, enum:['TARJETA_DEBITO', 'PAYPAL', 'MERCADOPAGO'] },
    
    usuario: { type: Schema.Type.ObjectId, ref: 'Usuario', required: true },
    estado: { type: Boolean, default: true }
})

module.exports = model('Prestamo', PrestamoSchema)