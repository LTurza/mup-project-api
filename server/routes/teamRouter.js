const express = require('express')

const teamController = require('./../controllers/teamController')

const router = express.Router()

router.post('/new-team', teamController.postNewTeam)

router.put('/update/:id')

module.exports = router