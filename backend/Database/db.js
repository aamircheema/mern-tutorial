const mongoose = require('mongoose')



const connectDB = async() => {
    try {
        const con = await mongoose.connect('mongodb://localhost:27017/test1')
        console.log(`Hello from MongoDB`)
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = connectDB