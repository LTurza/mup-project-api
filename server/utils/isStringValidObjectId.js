const mongoose = require('mongoose')

module.exports = (stringId) => {
  const id = new mongoose.Types.ObjectId(stringId)
  console.log(stringId, id)
  return stringId === id.toString() ||  stringId === id
}