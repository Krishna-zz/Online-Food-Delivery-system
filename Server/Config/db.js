const mongoose = require('mongoose')


const Connect_To_DB = async() => {
   try {
     await mongoose.connect(process.env.MONGO_URI);
     console.log('✅ MongoDB Connected');
   } catch (error) {
    console.error('❌ MongoDB connection error:', error.message)
    process.exit(1)
   }
     
}

module.exports = Connect_To_DB