const getDb  = require('./../utils/database').getDb

class User {
  constructor(firstName, secondName, email, password) {
    this.firstName = firstName
    this.secondName = secondName
    this.email = email
    this.password = password
  }

  save() {
    const db = getDb()
    return db.collection('users').insertOne(this)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
}
module.exports = User