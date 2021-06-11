const mongoose = require('mongoose')
const { Schema } = mongoose

const organizationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: String,
  tasks: Array,
  members: Array,
  admin: {
    id: {
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

module.exports = mongoose.model('Organization', organizationSchema, 'organizations')
