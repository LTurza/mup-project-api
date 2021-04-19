const express = require('express')
const organizationController = require('./../controllers/organizationController')

const router = express.Router()

router.post('/newOrganization', organizationController.postNewOrganization)

router.put('/addMembers', organizationController.putAddOrganizationMember)

router.post('/fetch/:userId/organizations', organizationController.getUserOrganizations)

module.exports = router
