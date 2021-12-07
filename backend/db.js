const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Nezvard:2014NeSkViK2014@cluster0.jia0f.mongodb.net/sheycars-udemy?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose