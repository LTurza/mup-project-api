const User = require('./../models/userSchema')
const Team = require('./../models/teamSchema')
const ObjectId = require('mongodb').ObjectId

exports.postNewTeam = async (req,res) => {
  const {teamTitle, teamDescription, teamLogo, userId, organizationId} = req.body

  if (typeof teamTitle === 'string' && teamTitle.trimEnd().length > 0
  && typeof teamDescription === 'string' && teamDescription.trimEnd().length > 0
  && typeof teamLogo === 'string'&& teamLogo.trimEnd().length > 0 
  && typeof userId === 'string' && userId.trimEnd().length === 24){
    const isTeamExist = await Team.exists({title: teamTitle})
    if (!isTeamExist) {
      const user = await User.findById(userId)
      const newTeam = Team({
        admin: {
          _id: ObjectId(user._id),
          firstName: user.firstName,
          lastName: user.lastName
        },
        title: teamTitle,
        description: teamDescription,
        teamLogo: teamLogo,
        members: [ObjectId(user._id)],
        tasks: [],
        organization: organizationId,
      })
      await newTeam.save()
      res.status(201).json({message: 'Team created succesfully'})
    } else {
      res.status(409).json({message: 'Team already exists.'})
    }
  } else {
    res.status(400).json({msg: 'Invalid data'})
  }
}

exports.getAllTeams = async (req, res) => {
  const allTeams = await Team.find({})
  res.status(200).json({teams: allTeams})
}

exports.putNewTeamMember = async (req, res) => {
  const userId = req.params.userId
  const teamId = req.params.teamId
  if(typeof userId === 'string' && userId.trim().length === 24
  && typeof teamId === 'string' && teamId.trim().length === 24) {
    const isTeamExist = await Team.exists({_id: teamId})
    const isUserExist = await User.exists({_id: userId})
    if (isUserExist && isTeamExist) {
      const team = await Team.findById(teamId)
      if (!team.members.some(element => element.toString() === userId)){
        team.members.push(userId)
        team.save()
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