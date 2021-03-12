const bcrypt = require('bcrypt')
const User = require('./../models/user')
const passwordHasher = require('./../utils/passwordHasher')


exports.postUserSignUp = (req,res) => {
  const userData = req.body.userData
  let user

  passwordHasher(result => {
    user = new User(
      userData.firstName,
      userData.lastName,
      userData.email,
      result,
    )

    user.save()
      .then(result => {
        console.log('User was registred successfully!')
        res.status(201).send()
      })
      .catch(err => conosle.err(err))
  }, userData.password)
}


exports.getUserSignIn = async (req,res) => {
  let userData
  await User.fetchUser(result => {
    userData = result
  }, req.params.email)

  bcrypt.compare(req.body.password, userData.password, (err,result) => {
    if(err) throw err
    else if (result) res.status(200).json({authorization: true, userData})
    else res.status(401).json({authorization: false, message: 'Incorrect password!'})
  })
}

exports.putUserUpdate = async (req,res) => {
  let userData
  await User.fetchUser(result => {
    userData = result
  }, req.params.email)
}