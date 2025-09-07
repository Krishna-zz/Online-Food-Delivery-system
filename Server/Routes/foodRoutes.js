const express = require('express')
const router = express.Router()
const Card = require('../Models/food.model')




router.get('/foodCard', async(req, res) => {
        try {
            const foods = await Card.find()
            res.json(foods)

        } catch (error) {
            res.status(500).json({message:"Error fetching Dishes", error})
        }
})


router.post('/setcard', async(req, res) => {
    try {
        console.log("Incoming data", req.body);
        const newCard = new Card(req.body)
        await newCard.save()
        res.status(201).json({message:"New FoodCard added successfully"})
    } catch (error) {
        console.error("Error adding Card", error)
        res.status(500).json({message:"Internal Server error", error})
    }
    
})


module.exports = router