const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs');

const Card = require('../Models/food.model')
const { log } = require('console')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
         const dir = "uploads/";
         if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);   
                 }
         cb(null, dir);
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})


router.get('/foodCard', async(req, res) => {
        try {
            const foods = await Card.find()
            res.json(foods)

        } catch (error) {
            res.status(500).json({message:"Error fetching Dishes", error})
        }
})


router.post('/setcard', upload.single('image') , async(req, res) => {
    try {
        console.log("Incoming data", req.body);
        console.log("File", req.file);
        
        const newCard = new Card({
            name: req.body.name,
            category: req.body.category,
            price:  req.body.price ,
            image: req.file? `/uploads/${req.file.filename}` : null
        })
        await newCard.save()
        res.status(201).json({message:"New FoodCard added successfully"})
    } catch (error) {       
        console.error("Error adding Card", error)
        res.status(500).json({message:"Internal Server error", error})
    }
    
})


module.exports = router