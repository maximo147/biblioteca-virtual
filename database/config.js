const mongoose = require('mongoose')

const connectDB = () => {
    try{
        await mongoose.connect(process.env.CONNECT_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('Base de datos conectada')

    }catch(err){
        console.log(err)
        throw new Error('Error al conectar BD', err)
    }
}

module.exports = connectDB
