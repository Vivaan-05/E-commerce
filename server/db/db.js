const mongoose = require('mongoose')

const connectToDB = async ()=>{
    try {
        
        mongoose.connect(`${process.env.MONGO_URI}/E-commerce`)
        console.log('connected to DB')
    } catch (error) {
        console.log('Error while connecting to DB')
    }
}
module.exports = connectToDB;