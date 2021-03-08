const express = require('express')

const userController = require('./../controllers/userController')

const router = express.Router()

router.post('/signUp', userController.postUserSignUp)


module.exports = router

