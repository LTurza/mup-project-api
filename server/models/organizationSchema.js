const mongoose = require('mongoose')
const { Schema } = mongoose

const organizationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  teams: Array,
  admin: {
    _id: {
      type: mongoose.ObjectId,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    }
  }
})

moudle.exports = mongoose.model('Organization', organizationSchema, 'organizations')