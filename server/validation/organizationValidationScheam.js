const newOrganizationDataSchema = {
  type: 'object',
  required: ['name', 'adminId', 'members'],
  properties:{
    name: {
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




module.exports = { newOrganizationDataSchema, newOrganizationMemberSchema, }
