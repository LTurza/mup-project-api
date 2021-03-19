const express = require('express')

const appController = require('./../controllers/appController')


const router = express.Router()

router.get('/', appController.getIndex)


module.exports = router