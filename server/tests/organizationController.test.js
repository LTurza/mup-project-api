const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('./../../server')
const db = require('./../utils/dbConnection')
const User = require('./../models/userSchema')
const Organization = require('./../models/organizationSchema')

chai.use(chaiHttp)
chai.should()

describe('organizationController', () => {
  before(() => {
    const user = new User({
      _id: '606ad8bd35fc7065bb2f4d5f',
      firstName: 'test',
      lastName: 'test',
      email: 'test@tesst.com',
      password: 'test'
    })
    const user2 = new User({
      _id: '6074a05174d4b31615e67ded',
      firstName: 'test2',
      lastName: 'test2',
      email: 'test2@tesst.com',
      password: 'test'
    })

    const organization = new Organization({
      _id: '6074a138599623163f961b44',
      name: 'test',
      admin: {
        id: '606ad8bd35fc7065bb2f4d5f',
        firstName: 'test',
        lastName: 'test',
      },
      members: [
        "6075e6e8a538eb4dd2d46fc4"
      ]
    })

    return Promise.all([
      user.save(),
      user2.save(),
      organization.save()
    ])
  })

  after(() => {
    return Promise.all([
      db.dropCollection('organizations'),
      db.dropCollection('users')
    ])
  })

  describe('should response with status code 200 if successful ', (done) => {
    chai.request(app).post('/organization/newOrganization').send({
      name: 'test organization',
      adminId: '606ad8bd35fc7065bb2f4d5f',
      members: [
        '606ad8bd35fc7065bb2f4d5f',
        '6074a05174d4b31615e67ded'
      ]
    }).end((err, res) => {
      expect(res.status).to.eq('')
    })
  })
})