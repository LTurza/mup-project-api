const bcrypt = require('bcrypt')
const User = require('./../models/userSchema')
const passwordHasher = require('./../utils/passwordHasher')

exports.postUserSignUp = async (req,res) => {
  const userData = req.body.userData
  const isUserExisit = await User.exists({email: userData.email})
  if (!isUserExisit) {
    const encryptedPassword = await bcrypt.hash(userData.password, 10)
    const newUser = User({
      firstName: userData.firstName,
      lastName: userData.lastName,
      password: encryptedPassword,
      email: userData.email,
    })
    await newUser.save()
    res.status(201).send()
  } else{
    res.status(409).send()
  }
}

exports.putUserUpdate = async (req,res) => {}
