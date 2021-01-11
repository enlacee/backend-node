require('dotenv').config();
const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_STRING_CN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("DB ONLINE")
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora d einiciar la DB ver los');
    }
}

module.exports = {
    dbConnection
}