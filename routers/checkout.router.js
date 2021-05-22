const { Router } = require('express')
const router = Router()


// SDK de Mercado Pago
const mercadopago = require('mercadopago');

//middlewares


// Agrega credenciales
mercadopago.configure({
    access_token: 'APP_USR-7247168892727082-051222-4086d3486dd4078bb7795b5a4b5cd167-756666865'
});

mercadopago.configurations.setAccessToken("APP_USR-7247168892727082-051222-4086d3486dd4078bb7795b5a4b5cd167-756666865");

router.post('/', (req, res) => {
    // Crea un objeto de preferencia
    let preference = {
        items: [
            {
                title: req.body.titulo,
                unit_price: parseInt(req.body.price),
                quantity: 1
            }
        ]
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.redirect(response.body.init_point);
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        });

})

router.post('/id', (req, res) => {
    var payment_data = {
        transaction_amount: 12,
        token: req.body.token,
        description: req.body.description,
        payment_method_id: req.body.id
    };

    mercadopago.payment.save(payment_data)
        .then(function (response) {
            console.log(response)
            res.status(response.status).json({
                status: response.body.status,
                status_detail: response.body.status_detail,
                id: response.body.id
            });
        })
        .catch(function (error) {
            console.log(error);
        });
})

module.exports = router