const newUserDataSchema = {
  type: 'object',
  required: ['firstName', 'lastName', 'password', 'email'],
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' }
  }
}

const updateUserDataSchema = {
  type: 'object',
  required: ['firstName', 'lastName', 'email'],
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' }
  }
}

const changeUserPasswordSchema = {
  type: 'object',
  required: ['oldPassword', 'newPassword'],
  properties: {
    oldPassword: {
      type: 'string',
      minLength: 8,
      maxLength: 16,
    },
    newPassword: {
      type: 'string',
      minLength: 8,
      maxLength: 16,
    }
  }
}

const fetchUsersSchema = {
  type: 'object',
  required: ['skip'],
  properties: {
    skip: { type: 'number' }
  }
}

module.exports = { newUserDataSchema, updateUserDataSchema, changeUserPasswordSchema, fetchUsersSchema }