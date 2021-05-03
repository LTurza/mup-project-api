const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('./../../server')
const Organization = require('./../models/organizationSchema')

chai.use(chaiHttp)

const { expect } = chai

describe('organization Controller', () => {
  after(async () => {
    const organization = await Organization.findOne({name: 'test'})
    await organization.remove()
  })

  it('should response with status code 201 if successfully created', done => {
    chai.request(app).post('/organization/newOrganization').send({
      organizationName: 'test',
      adminId: '6086ed02e7fb200b8df02cd8',
      members: [
        '6086ed02e7fb200b8df02cd8',
        '6086ed0ee7fb200b8df02cd9',
      ]
    }).end((err,res) => {
      expect(res.status).to.eq(201)
      expect(err).to.be.null
      done()
    })
  })

  it('should response with status code 409 if organization already exists', done => {
    chai.request(app).post('/organization/newOrganization').send({
      organizationName: 'test',
      adminId: '6086ed02e7fb200b8df02cd8',
      members: [
        '6086ed02e7fb200b8df02cd8',
        '6086ed0ee7fb200b8df02cd9',
      ]
    }).end((err,res) => {
      expect(res.status).to.eq(409)
      expect(err).to.be.null
      done()
    })
  })

  it('should response with status code 400 if req body is invalid', done => {
    chai.request(app).post('/organization/newOrganization').send({
      organizationName: 1,
      adminId: '607f35f97d8852835f5746de',
      members: [
        '607f35f97d8852835f5746de',
        '60828e19e18c80093650b9be',
      ]
    }).end((err,res) => {
      expect(res.status).to.eq(400)
      expect(err).to.be.null
      done()
    })
  })

})