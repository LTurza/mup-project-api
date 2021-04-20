const mongoose = require('mongoose')
const { Schema } = mongoose

const teamSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  teamLogo: String,
  admin: {
      id: {
      type: mongoose.ObjectId,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
  },
  members: Array,
  tasks: Array,
  organization: {
    type: mongoose.ObjectId,
    required: true
  },
})

module.exports = mongoose.model('Team', teamSchema, 'teams')
