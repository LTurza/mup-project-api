const getDb = require('./../utils/database').getDb
const ObjectId = require('mongodb').ObjectId

class Team {
  constructor({admin, title, description, teamLogo, members, tasks = []} ) {
    this.title = title
    this.description = description
    this.teamLogo = teamLogo
    this.admin = admin
    this.members = members || [admin.userId]
    this.tasks = tasks
  }

  async updateTeamMembers(teamId){
    const db = await getDb()
    await console.log(this)
    await db.collection('teams').updateOne({_id: ObjectId(teamId)}, {$set: {members: this.members}})
  }

  async addNewTeam () {
    const db = await getDb()
    await db.collection('teams').insertOne(this)
  }

  static async fetchTeamByName (title) {
    const db = await getDb()
    const user = await db.collection('teams').findOne({title})
    return user
  }

  static async fetchTeambyId (teamId) {
    const db = await getDb()
    const team = await db.collection('teams').findOne({_id: ObjectId(teamId)})
    return team
  }

  static async fetchAllTeams () {
    const db = await getDb()
    const allTeams = await db.collection('teams').find().toArray()
    return allTeams
  }

  static async teamShouldExist (teamId) {
    const db = await getDb()
    const teamExist = await db.collection('teams').findOne({_id: ObjectId(teamId)})
    return teamExist
  }



}


module.exports = Team