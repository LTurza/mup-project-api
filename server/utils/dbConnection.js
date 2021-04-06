const mongoose = require('mongoose')

const env = process.env.NODE_ENV || 'development'

if (env === 'test') {
  
  process.env.MONGO_URI = 'mongodb://localhost:27017/mup-project-tests'
  console.log(process.env.MONGO_URI)
} else {
  process.env.MONGO_URI = 'mongodb://localhost:27017/mup-project'
}

mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection


module.exports = db