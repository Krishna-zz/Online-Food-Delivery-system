const mongoose = require('mongoose')


const CardSchema = new mongoose.Schema({
    name:String,
    category:String,
    price:Number
})


const Card = mongoose.model('Card', CardSchema)


module.exports  = Card
