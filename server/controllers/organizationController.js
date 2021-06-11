const Organization = require('./../models/organizationSchema')
const User = require('./../models/userSchema')
const isStringValidObjectId = require('./../utils/isStringValidObjectId')
const {
  newOrganizationDataSchema,
  newOrganizationMemberSchema,
  fetchUserOrganizationsSchema,
  deleteOrganizationsSchema,
} = require('./../validation/organizationValidationScheam')
const Ajv = require('ajv')

const ajv = new Ajv()

exports.postNewOrganization = async (req, res) => {
  const { organizationName, adminId, members, organizationLogo } = req.body
  const validate = ajv.compile(newOrganizationDataSchema)
  const isValid = validate({
    organizationName,
    adminId,
    members,
    organizationLogo,
  })
  const isAdminIdValid = isStringValidObjectId(adminId)
  if (isValid && isAdminIdValid){
    Promise.all([
      User.exists({_id: adminId}),
      Organization.exists({name: organizationName})
    ])
      .then(async result => {
        const isUserExist = result[0]
        const isOrganizationExist = result[1]

        if (isUserExist && !isOrganizationExist) {
          const userData = await User.findById({_id: adminId})
          const newOrganization = new Organization({
            name: organizationName,
            admin: {
              id: userData._id,
              firstName: userData.firstName,
              lastName: userData.lastName
            },
            members,
            logo: organizationLogo,
            tasks:[],
          })
          members.forEach(async (element) => {
            const member = await User.findById(element)
            member.organizations.push(newOrganization._id)
            await  User.updateOne({_id: member._id}, {organizations: member.organizations})
          })
          userData.organizations.push(newOrganization._id)
          await newOrganization.save(),
          res.status(201).send()
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
  const validate = ajv.compile(fetchUserOrganizationsSchema)
  const isvalid = validate(req.query)
  const userId = req.params.userId
  const isUserIdValid = isStringValidObjectId(userId)
  if (isvalid && isUserIdValid){
    const user = await User.findById({_id: userId})
    const organizations = []
    const userOrganizations = user.organizations.splice(req.query.skip, 5)
    for (const organizationId of userOrganizations){
      const isOrganizationValidId = isStringValidObjectId(organizationId)
      isOrganizationValidId ? organizations.push(await Organization.findById(organizationId)) : null
    }
    res.status(200).json(JSON.stringify(organizations))
  } else {
    res.status(400).send()
  }
}

exports.getOrganizationCount = async (req, res) => {
  const isUserValid = await User.exists({_id: req.query.userId})
  if (isUserValid) {
    const user = await User.findById({_id: req.query.userId})
    const countOrganizations = user.organizations.length
    res.status(200).send(JSON.stringify(countOrganizations))
  } else {
    res.status(401).send()
  }
}

exports.deleteOrganizations = async (req,res) => {
  const validate = ajv.compile(deleteOrganizationsSchema)
  const isValid = validate(req.body)
  const isUserExist = await User.exists({_id: req.body.userId})
  if (isValid && isUserExist) {
    const userId = req.body.userId
    const organizationToDelete = req.body.organizations
    organizationToDelete.forEach(async (organizationId) => {
      const organization = await Organization.findById(organizationId)
      if (organization.admin.id.equals(userId)) {
        organization.members.forEach(async (memberId) => {
          const member =  await User.findById(memberId)
          member.organizations = member.organizations.filter(element => !element.equals(organizationId))
          await User.updateOne({_id: member._id}, {organizations: member.organizations})
        })
        await Organization.deleteOne({_id: organization._id})
      } else {
        const member =  await User.findById(userId)
        member.organizations = member.organizations.filter(element => !element.equals(organizationId))
        await User.updateOne({_id: member._id}, {organizations: member.organizations})
      }
      res.status(200).send()
    })
  }
}

exports.getOrganizationData = async (req, res) => {
  const organizationId = req.query.organizationId
  const isOrganizationValidId = isStringValidObjectId(organizationId)

  if (isOrganizationValidId) {
    const organization = await Organization.findById(organizationId)
    res.status(200).send(JSON.stringify(organization))
  } else {
    res.status(400).send()
  }
}
