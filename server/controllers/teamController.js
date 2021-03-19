const Team = require('./../models/team')
const User = require('./../models/user')
const mongodb = require('mongodb')


exports.postNewTeam = (req,res) => {
  const teamData = req.body.teamData
  console.log(req.body.userId)
  User.fetchUserById(req.body.userId)
    .then(result => {
      console.log(result)
      const userDataForTeam = {
        userId: new mongodb.ObjectID(result._id),
        firstname: result.firstName,
        secondName: result.lastName
      }

      return userDataForTeam
    })
    .then(userDataForTeam => new Team(userDataForTeam, teamData.title, teamData.description, teamData.teamLogo))
    .then(team => team.addTeam())
    .then(res.status(201).json({message: 'Team created succesfully'}))

}