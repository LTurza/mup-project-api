const getDb  = require('./../utils/database').getDb
const mongo = require('mongodb');

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

  static fetchUserById(userId) {
    const db = getDb()
    const promise = new Promise((resolve, reject) => {
      db.collection('users').findOne({"_id": new mongo.ObjectId(userId)})
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
    return promise
  }

  static fetchUserByEmail(email) {
    const db = getDb()
    const promise = new Promise((resolve, reject) => {
      db.collection('users').findOne({email})
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
    return promise
  }
}

module.exports = User