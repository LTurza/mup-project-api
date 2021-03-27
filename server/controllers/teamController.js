const Team = require('./../models/team')
const User = require('./../models/user')
const ObjectId = require('mongodb').ObjectId

exports.postNewTeam = async (req,res) => {
  const teamTitle = req.body.teamTitle
  const teamDescription = req.body.teamDescription
  const teamLogo = req.body.teamLogo
  const userId = req.body.userId

  if (typeof teamTitle === 'string' && teamTitle.trimEnd().length > 0
  && typeof teamDescription === 'string' && teamDescription.trimEnd().length > 0
  && typeof teamLogo === 'string'&& teamLogo.trimEnd().length > 0 
  && typeof userId === 'string' && userId.trimEnd().length === 24){

      const teamExist = await Team.fetchTeamByData('title', teamTitle)
      if (teamExist === null) {
        
        const user = await User.fetchUserByData('_id', ObjectId(userId))
        const dataForNewTeam = {
          admin: {
            userId: ObjectId(user._id),
            firstname: user.firstName,
            secondName: user.lastName
          },
          title: teamTitle,
          description: teamDescription,
          logo: teamLogo,
          members: [ObjectId(user._id)],
          tasks: [] 
        }
  
        const newTeam = new Team(dataForNewTeam)
        await newTeam.addNewTeam()
        res.status(201).json({message: 'Team created succesfully'})
  
      } else {
        res.status(409).json({message: 'Team already exists.'})
    }
  } else {
    res.status(400).json({msg: 'Invalid data'})
  }
}


exports.getAllTeams = async (req, res) => {
  const allTeams = await Team.fetchAllTeams()
  res.status(200).json({teams: allTeams})
}

exports.putNewTeamMember = async (req, res) => {
  const userId = req.params.userId
  const teamId = req.params.teamId

  if(typeof userId === 'string'&& userId.trim().length === 24 
  && typeof teamId === 'string' && teamId.trim().length === 24) {

    const isTeamExist = await Team.isTeamExist(teamId)
    const isUserExist = await User.isUserExisit(userId)
    if (isUserExist && isTeamExist) {

      const team = await Team.fetchTeamByData('_id', ObjectId(teamId))

      if(team.members.find(element => element.toString() === userId) === undefined) {
        team.members.push(ObjectId(userId))
        const updatedTeam = new Team(team)
        updatedTeam.updateTeam()
        res.status(200).json({message: 'User updated succesfuly'})
      } else {
        res.status(400).json({msg: 'User is already member of a team'})
      }
    } else {
      res.status(400).json({msg: 'Invalid team or user'})
    }
  } else {
    res.status(400).json({msg: 'Invalid data'})
  }
}