const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://turza-admin:Thbk9572@mup-project.ssf72.mongodb.net/mup-project?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection


module.exports = db