const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection

module.exports = db