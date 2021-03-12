const getDb  = require('./../utils/database').getDb

class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
  }

  save() {
    const db = getDb()
    return db.collection('users').insertOne(this)
      .then(result => console.log(result))
      .catch(err => console.error(err))
  }
  static fetchUser(cb, email) {
    const db = getDb()
    return db.collection('users').findOne({email})
      .then(result => {
        cb(result)
      })
      .catch(err => console.error(err))
  }
}
module.exports = User