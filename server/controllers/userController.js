const bcrypt = require('bcrypt')
const User = require('./../models/user')
const passwordHasher = require('./../utils/passwordHasher')

exports.postUserSignUp = async (req,res) => {
  const userData = req.body.userData
  const user = await User.fetchUserByData('email', userData.email)

  if (user !== null) {
    res.status(409).json({message: 'User with this email address already exists.'})
  } else {
    const encryptedPassword = await bcrypt.hash(userData.password, 10) 
    const newUser = new User({
      firstName: userData.firstName,
      lastName: userData.lastName,
      password: encryptedPassword,
      email: userData.email,
    })
    await newUser.addUser()
    res.status(201).json({message: 'User was registred succesfully'})
  }
}

exports.putUserUpdate = async (req,res) => {
  // TODO: Update User
  // let userData
  // await User.fetchUser(result => {
  //   userData = result
  // }, req.params.email)
}