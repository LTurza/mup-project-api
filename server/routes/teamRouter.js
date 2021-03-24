const express = require('express')

const teamController = require('./../controllers/teamController')

const router = express.Router()

router.post('/new-team', teamController.postNewTeam)

router.get('/fetch-all-teams', teamController.getAllTeams)

router.put('/:teamId/user-join/:userId', teamController.putNewTeamMember)

module.exports = router