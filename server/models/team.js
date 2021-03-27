const db = require('./../utils/database').getDb
const ObjectId = require('mongodb').ObjectId

const collectionName = 'teams'

class Team {
  constructor({_id , admin, title, description, teamLogo, members, tasks}) {
    this._id = _id !== null ? ObjectId(_id) : ObjectId()
    this.title = title 
    this.description = description
    this.teamLogo = teamLogo
    this.admin = admin
    this.members = members 
    this.tasks = tasks
  }

  async updateTeam(){
    await db().collection(collectionName).updateOne({_id: ObjectId(this._id)}, {$set: {
      members: this.members,
      tasks: this.tasks,
      description:this.description,
      title: this.title,
      teamlogo: this.teamLogo}})
  }

  async addNewTeam () {
    await db().collection(collectionName).insertOne(this)
  }

  static fetchTeamByData (documentFieldName, documentFieldData) {
    return db().collection(collectionName).findOne({[documentFieldName]: documentFieldData})
  }

  static fetchAllTeams () {
    return db().collection(collectionName).find().toArray()
  }

  static isTeamExist (id) {
    return Team.fetchTeamByData('_id', ObjectId(id)) === null ? false : true
  }
}

module.exports = Team