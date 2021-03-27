const db  = require('./../utils/database').getDb
const ObjectId = require('mongodb').ObjectId

const collectionName = 'users'

class User {
  constructor({_id, firstName, lastName, email, password, teams = []}) {
    this._id = _id !== null ? ObjectId(_id) : ObjectId()
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.teams = teams
  }

  addUser() {
    return db().collection(collectionName).insertOne(this)
  }

  static fetchUserByData(documentFieldName, documentFieldData){
    return db().collection(collectionName).findOne({[documentFieldName]: documentFieldData})
  }

  static isUserExisit (id) {
    return User.fetchUserByData('_id', ObjectId(id)) === null ? false : true
  }
}

module.exports = User