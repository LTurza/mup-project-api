const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../server')
const User = require('./../models/userSchema')

chai.use(chaiHttp)
chai.should()

const { expect } = chai

describe ('userController', () => {
  after(async () => {
    const user = await User.findOne({email: 'test@test.com'})
    user.remove()
  }) 

  describe('Create new user', () => {
    it('should response with status 201 if successfuly', (done) => {
      chai.request(app).post('/user/signUp').send({
        firstName: 'test',
        lastName: 'test',
        password: 'qwqwqwqwqw',
        email: 'test@test.com'
      }).end((err, res) => {
        expect(res.status).to.eq(201)
        expect(err).to.be.null
        done()
      })
    })

    it('should response with status 409 if user already exists', done => {
      chai.request(app).post('/user/signUp').send({
        firstName: 'test',
        lastName: 'test',
        password: 'qwqwqwqwqw',
        email: 'test@test.com'
      }).end((err, res) => {
        expect(res.status).to.eq(409)
        expect(err).to.be.null
        done()
      })
    })
  })

  describe('count users i db', () => {
    it('should return number of all users in db with status 200', done => {
      chai.request(app).get('/user/countUsers').end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body.userCount).to.eq(3)
        expect(err).to.be.null
        done()
      })
    })
  })

  describe('return users from db', () => {
    it('should return users in db', done => {
      chai.request(app).get('/user/fetchUsers/').send({skip: 0}).end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an('array')
        expect(err).to.be.null
        done()
      })
    })
  })

  // describe('change user data', () => {
  //   it('password change', done => {
  //     chai.request(app).get('/user/update/password/').query({
  //       userId: '607f35f97d8852835f5746de'
  //     }).send({
  //       oldPassword: 'testUser',
  //       newPassword: 'zaq1@WSX'
  //     }).end((err,res) => {
  //       expect(res.status).to.eq(200)
  //       expect(err).to.be.null
  //       done()
  //     })
  //   })
  // })
})
