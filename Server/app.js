const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const connectdb = require('./Config/db')
const foodroutes = require('./Routes/foodRoutes')

dotenv.config()
connectdb()

const app = express()


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/user', foodroutes)


app.listen(3000)