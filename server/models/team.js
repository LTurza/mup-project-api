const getDb = require('./../utils/database').getDb

class Team {
  constructor(userData, title, description, teamLogo ) {
    this.title = title
    this.description = description
    this.teamLogo = teamLogo
    this.admin = userData
    this.members = []
    this.tasks = []
  }

  addTeam () {
    const db = getDb()
    return db.collection('teams').insertOne(this)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
}

module.exports = Team