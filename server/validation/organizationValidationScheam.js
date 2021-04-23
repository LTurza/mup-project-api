const newOrganizationDataSchema = {
  type: 'object',
  required: ['organizationName', 'adminId', 'members'],
  properties:{
    organizationName: {
      type: 'string',
      minLength: 3,
      maxLength: 32,
    },
    adminId: {
      type: 'string',
      minLength: 24,
      maxLength: 24
    },
    members: { type:  'array' }
  }
}

const newOrganizationMemberSchema = {
  type: 'object',
  required: ['organizationId', 'newMembers'],
  properties: {
    organizationId: {
      type: 'string',
      minLength: 24,
      maxLength: 24
    },
    newMembers: { type:  'array' }
  }
}

const fetchUserOrganizationsSchema = {
  type: 'object',
  required: ['skip'],
  properties: {
    skip: { type: 'number'}
  }
}

module.exports = { newOrganizationDataSchema, newOrganizationMemberSchema, fetchUserOrganizationsSchema, }