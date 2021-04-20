const express = require('express')
const organizationController = require('./../controllers/organizationController')

const router = express.Router()

router.post('/newOrganization', organizationController.postNewOrganization)

router.put('/addMembers', organizationController.putAddOrganizationMember)

router.get('/fetch/:userId/organizations', organizationController.getUserOrganizations)

router.get('/count', organizationController.getOrganizationCount)

module.exports = router
