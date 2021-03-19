const bcrypt = require('bcrypt')

const passwordHasher = async (cb, plainTextPassword) => {
  const saltRounds = 10
  bcrypt.hash(plainTextPassword,saltRounds, (err, hash) => {
    if (err) throw err
    cb(hash)
  })
}
module.exports = passwordHasher