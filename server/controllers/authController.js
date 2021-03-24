const bcrypt = require('bcrypt')
const User = require('./../models/user')

exports.postUserSignIn = (req,res) => {
  User.fetchUserByEmail(req.body.email)
    .then(result => result.password)
    .then(password => {
      bcrypt.compare(req.body.password, password, (err,result) => {

      if (err) {
        throw err
      }
      else if (result) {
          req.session.loggedIn = true
          res.status(200).json({authorization: true})
        }
        else res.status(401).json({authorization: false, message: 'Incorrect data!'})
      })
    })
}