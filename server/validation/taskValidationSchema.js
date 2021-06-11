const newTaskDataSchema = {
  type: 'object',
  require: ['title', 'description', 'organizationId'],
  properties: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    organizationId: {
      type: 'string',
      minLength: 24,
      maxLength: 24,
    }
  }
}

module.exports = { newTaskDataSchema }