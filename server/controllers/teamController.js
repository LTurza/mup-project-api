const Team = require('./../models/team')
const User = require('./../models/user')
const ObjectId = require('mongodb').ObjectId
const Ajv = require('ajv')

const ajv = new Ajv()
const { newTeamDataSchema, addMemberToTeamSchema } = require('./../validation/schemas.js')

exports.postNewTeam = async (req,res) => {
  const teamDescription = req.body.teamDescription
  const teamLogo = req.body.teamLogo
  const userId = req.body.userId

  const validate = ajv.compile(newTeamDataSchema)
  const valid = validate(req.body)

  if (valid){
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
  const validate = ajv.compile(addMemberToTeamSchema)
  const valid = validate(req.params)

  if(valid) {

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