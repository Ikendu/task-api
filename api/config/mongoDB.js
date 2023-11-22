const mongoose = require(`mongoose`)
const dotenv = require('dotenv').config()

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database Connected successfully`)
  } catch (error) {
    console.log(`Database Connection error: ${error}`)
  }
}

module.exports = connectDB
