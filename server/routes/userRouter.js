const express = require('express')
const userController = require('./../controllers/userController')

const router = express.Router()

router.post('/signUp', userController.postNewUser)

router.put('/update/:userId' ,userController.putUpdateUser)

router.put('/update/password/:userId', userController.putChangeUserPassword)

router.get('/fetchUsers', userController.getFetchUsers)

router.get('/countUsers', userController.getUserCount)

router.get('/fetchUserId', userController.getFetchUserId)

module.exports = router
