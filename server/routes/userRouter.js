const express = require('express')
const userController = require('./../controllers/userController')

const router = express.Router()

router.post('/signUp', userController.postUserSignUp)

router.put('/update/:email' ,userController.putUserUpdate)

module.exports = router

