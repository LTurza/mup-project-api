const mongoose = require('mongoose')

module.exports = (stringId) => {
 const id = new mongoose.Types.ObjectId(stringId)
 return stringId === id.toString()
}