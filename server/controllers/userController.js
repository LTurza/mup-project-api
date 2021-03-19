const bcrypt = require('bcrypt')
const User = require('./../models/user')
const passwordHasher = require('./../utils/passwordHasher')


exports.postUserSignUp = (req,res) => {
  const userData = req.body.userData
  User.fetchUserByEmail(userData.email)
    .then(result => {
      if (!!result) res.status(409).json({message: 'User with this email address already exists.'})
      else {
        bcrypt.hash(userData.password, 10, (err, result) => {
          const user = new User(
            userData.firstName,
            userData.lastName,
            userData.email,
            result
          )
        })
        return user
      }
    })
    .then(user => console.log(user))
    .then(() => res.status(201).json({message: 'User was registred succesfully'}))
    .catch(err => conosle.err(err))
}

exports.putUserUpdate = async (req,res) => {
  let userData
  await User.fetchUser(result => {
    userData = result
  }, req.params.email)
}