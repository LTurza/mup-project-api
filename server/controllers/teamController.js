const Team = require('./../models/team')
const User = require('./../models/user')
const ObjectId = require('mongodb').ObjectId


exports.postNewTeam = async (req,res) => {
  const teamData = req.body.teamData
  const teamExist = await new Team({title: teamData.title}).fetchTeamByName()
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
    const newTeam = new Team(dataForNewTeam)
    await newTeam.addNewTeam()
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
  const userExist = await new User({_id: userId}).fetchUserById()

  // if (userExist) {
  //   const team = await Team.fetchTeambyId(teamId)
  //   const newTeam = await new Team(team)
  //   newTeam.members.forEach(element => element.toString() === userId ? res.status(409).json({message: 'User is already team member'}) : null)
  //   await team.members.push(ObjectId(userId))
  //   console.log(newTeam)
  //   await newTeam.updateTeamMembers()

    res.status(200).json({message: 'User added succesfuly'})
  // }
}