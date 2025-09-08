const mongoose = require('mongoose')


const CardSchema = new mongoose.Schema({
    name:String,
    category:String,
    price:String,
    image: String,
})


const Card = mongoose.model('Card', CardSchema)


module.exports  = Card
