const express = require('express')
const taskController = require('./../controllers/taskController')

const router = express.Router()

router.post('/newTask', taskController.postNewTask)

router.put('/updateStatus', taskController.putUpdateStatus)

module.exports = router