const Organization = require('./../models/organizationSchema')
const User = require('./../models/userSchema')
const isStringValidObjectId = require('./../utils/isStringValidObjectId')
const {
  newOrganizationDataSchema,
  newOrganizationMemberSchema,
  getUserOrganizationsSchema
} = require('./../validation/organizationValidationScheam')
const Ajv = require('ajv')

const ajv = new Ajv()

exports.postNewOrganization = async (req, res) => {
  const validate = ajv.compile(newOrganizationDataSchema)
  const isValid = validate(req.body)
  const organizationName = req.body.name
  const adminId = req.body.adminId

  const isAdminIdValid = isStringValidObjectId(adminId)

  if (isValid && isAdminIdValid){
    const isUserexists = await User.exists({_id: adminId})
    const isOrganizationexists = await Organization.exists({name: organizationName})

    if (isUserexists && !isOrganizationexists) {
      const userData = await User.findById({_id: adminId})
      const newOrganization = new Organization({
        name: organizationName,
        admin: {
          id: userData._id,
          firstName: userData.firstName,
          lastName: userData.lastName
        },
        members: req.body.members
      })
      userData.organizations.push(newOrganization._id)
      console.log(userData.organizations)
      Promise.all([
        await newOrganization.save(),
        await userData.save()
      ])
        .then(() => {
          res.status(200).send()
        })
        .catch(error => serverLog(error))
    } else {
      res.status(409).send()
    }
  } else {
    res.status(400).send()
  }
}

exports.putAddOrganizationMember = async (req, res) => {
  const organizationId = req.body.organizationId
  const members = req.body.newMembers
  const validate = ajv.compile(newOrganizationMemberSchema)
  const isValid = validate(req.body)

  if (isValid) {
    const organizationData = await Organization.findById(organizationId)
    for (const index in members) {
      const isUserIdValid = isStringValidObjectId(members[index])
      const isUserExists = await User.exists({_id: members[index]})
      if (isUserExists && !organizationData.members.includes(members[index]) && isUserIdValid) {
        organizationData.members.push(members[index])
      }
    }
    await organizationData.save()
    res.status(200).send()
    } else {
    res.status(400).send()
  }
}

exports.getUserOrganizations = async (req, res) => {
  const isUserValid ={
    const fetchUserOrganizationsSchema = {
      type: 'object',
      required: ['skip'],
      properties: {
        userId: { type: 'number' }
      }
    }
  }
  console.log(isValid)
  // const user = await User.findById(req.params.userId)
  // const organizations = await Organization.find({
  //   '_id':{
  //     $in: user.organizations
  //   }
  // })
  res.status(200).json(organizations)
}

exports.getOrganizationCount = async (req, res) => {
  const organizationCount = await Organization.count()
  res.status(200).json(organizationCount)
}