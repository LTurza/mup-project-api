const bcrypt = require('bcrypt')
const User = require('./../models/userSchema')
const jwt = require('jsonwebtoken')

exports.postUserSignIn = async (req,res) => {
  const email = req.body.email
  const password = req.body.password
  let user = await User.findOne({email: email})
  const isPasswordMatching  = await bcrypt.compare(password, user.password)

  if (isPasswordMatching){
    const token = jwt.sign({
      expiresIn: Math.floor(Date.now() / 1000) + (60 * 60),
      id: user._id,
    }, 'secretKey')
    user.save()
    res.status(200).send(token)
  } else {
    res.status(401).send()
  }
}