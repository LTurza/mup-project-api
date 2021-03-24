const getDb  = require('./../utils/database').getDb
const ObjectId = require('mongodb').ObjectId

class User {
  constructor(firstName, lastName, email, password, teams = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.teams = teams
  }

  addUser() {
    const db = getDb()
    return db.collection('users').insertOne(this)
      .then(result => console.log(result))
      .catch(err => console.error(err))
  }

  static async fetchUserById(userId) {
    const db = getDb()
    const user = await db.collection('users').findOne({_id: ObjectId(userId)})

    return user
  }
  
  static async userShouldExist (userId) {
    const db = getDb()
    let userExist
    await db.collection('users').findOne({_id: ObjectId(userId)}) === null ? userExist = false : userExist = true

    return userExist
  }


  static fetchUserByEmail (email) {
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