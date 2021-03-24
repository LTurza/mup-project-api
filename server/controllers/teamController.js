const Team = require('./../models/team')
const User = require('./../models/user')
const ObjectId = require('mongodb').ObjectId


exports.postNewTeam = async (req,res) => {
  const teamData = req.body.teamData
  const teamExist = await Team.fetchTeamByName(teamData.title)
  if (teamExist === null) {
    const user = await User.fetchUserById(req.body.userId)
    const dataForNewTeam = {
      admin: {
        userId: ObjectId(user._id),
        firstname: user.firstName,
        secondName: user.lastName
      },
      title: teamData.title,
      description: teamData.description,
      logo: teamData.teamLogo
    }
    const newTeam = await new Team(dataForNewTeam)
    newTeam.addNewTeam()
    res.status(201).json({message: 'Team created succesfully'})
  } else {
    res.status(409).json({message: 'Team already exists.'})
  }
}

exports.getAllTeams = async (req, res) => {
  const allTeams = await Team.fetchAllTeams()
  res.status(200).json({teams: allTeams})
}

exports.putNewTeamMember = async (req, res) => {
  const userId = req.params.userId
  const teamId = req.params.teamId
  const userExist = await User.userShouldExist(userId)

  if (userExist) {
    const team = await Team.fetchTeambyId(teamId)
    // await team.members.push(ObjectId(userId))
    const newTeam = await new Team(team)
    console.log('db id: ' +  typeof newTeam.members[1].toString())
    console.log('req id: ' + typeof userId)
    console.log(newTeam.members[1].toString() === userId)


    // newTeam.updateTeamMembers(teamId)
    res.status(200).json({msg: 'asd'})
  }
}