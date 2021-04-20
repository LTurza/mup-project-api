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
  const {organizationName, adminId} = req.body
  const validate = ajv.compile(newOrganizationDataSchema)
  const isValid = validate(req.body)
  const isAdminIdValid = isStringValidObjectId(adminId)
  if (isValid && isAdminIdValid){
    Promise.all([
      User.exists({_id: adminId}),
      Organization.exists({name: organizationName})
    ])
      .then(async result => {
        const isUserExist = result[0]
        const isOrganizationExist =result[1]

        if (isUserExist && !isOrganizationExist) {
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
      })
  } else {
    res.status(400).send()
  }
}

exports.putAddOrganizationMember = async (req, res) => {
  const {organizationId, newMembers} = req.body
  const validate = ajv.compile(newOrganizationMemberSchema)
  const isValid = validate(req.body)

  if (isValid) {
    const organizationData = await Organization.findById(organizationId)
    for (const index in newMembers) {
      const isUserIdValid = isStringValidObjectId(newMembers[index])
      const isUserExists = await User.exists({_id: newMembers[index]})
      if (isUserExists && !organizationData.members.includes(newMembers[index]) && isUserIdValid) {
        organizationData.newMembers.push(newMembers[index])
      }
    }
    await organizationData.save()
    res.status(200).send()
  } else {
    res.status(400).send()
  }
}

exports.getUserOrganizations = async (req, res) => {
  // const user = await User.findById(req.params.userId)
  // const organizations = await Organization.find({
  //   '_id':{
  //     $in: user.organizations
  //   }
  // })
  // res.status(200).json()
}

exports.getOrganizationCount = async (req, res) => {
  const organizationCount = await Organization.countDocuments()
  res.status(200).json(organizationCount)
}