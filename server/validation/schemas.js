const newTeamDataSchema = {
    type: 'object',
    properties: {
        teamTitle: {type: 'string'},
        teamDescription: {type: 'string'},
        teamLogo: {type: 'string'},
        userId: {type: 'string'}
    },
    required: ['teamTitle','userId'],
    additionalProperties: false,
}
const addMemberToTeamSchema = {
    type: 'object',
    properties: {
        teamId: {type: 'string', maxLength: 24},
        userId: {type: 'string'}
    },
    required: ['teamId','userId'],
    additionalProperties: false,
}

module.exports = { newTeamDataSchema, addMemberToTeamSchema }