const getDb = require('./../utils/database').getDb
const ObjectId = require('mongodb').ObjectId

class Team {
  constructor({admin = {}, title = '', description = '', teamLogo =' ', members = [], tasks = []} ) {
    this.title = title
    this.description = description
    this.teamLogo = teamLogo
    this.admin = admin
    this.members = members 
    this.tasks = tasks
    this.db = getDb()
    this.collection = 'teams'
  }

  async updateTeamMembers(){
    const db = await getDb()
    await console.log(this)
    await this.db.collection(this.collection).updateOne({_id: ObjectId(this._id)}, {$set: {members: this.members}})
  }

  async addNewTeam () {
    const newTeam = {
      title: this.title,
      description: this.description,
      teamLogo: this.teamLogo,
      admin: this.admin,
      task: this.task,
      members: this.members || [admin._id]
    }
    await this.db.collection(this.collection).insertOne(newTeam)
  }

  async fetchTeamByName () {
    return this.db.collection(this.collection).findOne({title: this.title})
  }

  async fetchTeamById (teamId) {
    return db.collection(this.collection).findOne({_id: ObjectId(teamId)})
    
  }

  static async fetchAllTeams () {
    return getDb().collection('teams').find().toArray()
  }

  static async teamShouldExist (teamId) {
    const db = await getDb()
    const teamExist = await db.collection(this.collection).findOne({_id: ObjectId(teamId)})
    return teamExist
  }



}


module.exports = Team