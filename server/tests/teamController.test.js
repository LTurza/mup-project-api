// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const app = require('../../server')
// const db = require('./../utils/dbConnection')
// const User = require('./../models/userSchema')
// const Team = require('./../models/teamSchema')
//
// chai.use(chaiHttp)
// chai.should()
//
// const { expect } = chai
//
// describe ('teamController', () => {
//   before(() => {
//     const user = new User({
//       _id: '606ad8bd35fc7065bb2f4d5f',
//       firstName: 'test',
//       lastName: 'test',
//       email: 'test@tesst.com',
//       password: 'test'
//     })
//
//     const user2 = new User({
//       _id: '606ad8bd35fc7065bb2f4d5d',
//       firstName: 'test2',
//       lastName: 'test2',
//       email: 'test2@tesst.com',
//       password: 'test2'
//     })
//
//     const team = new Team({
//       _id: '606ad8bd35fc7065bb2f4d5e',
//       admin: {
//         id: '606ad8bd35fc7065bb2f4d5f',
//         firstName: 'test',
//         lastName: 'test'
//       },
//       title: 'Test ',
//       description: 'Test description',
//       teamLogo: 'testLogo',
//       organization: '605b9ef2c9e7ae4af18f3bc4',
//       members: ['606ad8bd35fc7065bb2f4d5d']
//     })
//
//     return Promise.all([
//       user.save(),
//       user2.save(),
//       team.save()
//     ])
//   })
//
//   after(() => {
//     return Promise.all([
//       db.dropCollection('teams'),
//       db.dropCollection('users')
//     ])
//   })
//
//   describe ('Create new Team', () => {
//     it('should response with status code 201 if team created successfully', (done) => {
//       chai.request(app).post('/teams/new-team').send(
//         {
//           userId: '606ad8bd35fc7065bb2f4d5d',
//           teamTitle: 'Test Team',
//           teamDescription: 'Test description',
//           teamLogo: 'testLogo',
//           organizationId: '605b9ef2c9e7ae4af18f3bc4'
//         }).end((err,res) => {
//         expect(res.status).to.eq(201)
//         expect(err).to.be.null
//         done()
//       })
//     })
//
//     it('should response with status code 409 when team already exists', (done) => {
//       chai.request(app).post('/teams/new-team').send({
//         userId: '606ad8bd35fc7065bb2f4d5f',
//         teamTitle: 'Test Team',
//         teamDescription: 'Test description',
//         teamLogo: 'testLogo',
//         organizationId: '605b9ef2c9e7ae4af18f3bc4'
//       }).end((err, res) => {
//         expect(res.status).to.eq(409)
//         expect(err).to.be.null
//         done()
//       })
//     })
//
//     it('should response with status code 400 when userId is invalid', (done) => {
//       chai.request(app).post('/teams/new-team').send(
//         {
//           userId: '1',
//           teamTitle: 'Test Team',
//           teamDescription: 'Test description',
//           teamLogo: 'testLogo',
//           organizationId: '605b9ef2c9e7ae4af18f3bc4'
//         }).end((err,res) => {
//         expect(res.status).to.eq(400)
//         expect(err).to.be.null
//         done()
//       })
//     })
//   })
//
//   describe('Add user to team', () => {
//     it('should response with status code 200 when successfully add new team member', (done) => {
//       chai.request(app).put('/teams/606ad8bd35fc7065bb2f4d5e/user-join/606ad8bd35fc7065bb2f4d5f').end((err, res) => {
//         expect(res.status).to.eq(200)
//         expect(err).to.be.null
//         done()
//       })
//     })
//
//     it('should response with status code 400 if team or user dosn\'t exist', (done) => {
//       chai.request(app).put('/teams/606ad8bd35fc7065bb2f4d5f/user-join/606ad8bd35fc7065bb2f4d5e').end((err, res) => {
//         expect(res.status).to.eq(400)
//         expect(err).to.be.null
//         done()
//       })
//     })
//
//     it('should response with status code 400 if team or user ids are incorrect', (done) => {
//       chai.request(app).put('/teams/qqqqqqq35fc7065bb2f4d5f/user-join/606ad8bd35fc7065bbqqqqqq').end((err, res) => {
//         expect(res.status).to.eq(400)
//         expect(err).to.be.null
//         done()
//       })
//     })
//
//     it('should response with status code 400 if user is already a team member', (done) => {
//       chai.request(app).put('/teams/606ad8bd35fc7065bb2f4d5e/user-join/606ad8bd35fc7065bb2f4d5d').end((err, res) => {
//         expect(res.status).to.eq(400)
//         expect(err).to.be.null
//         done()
//       })
//     })
//   })
// })