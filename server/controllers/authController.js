const bcrypt = require('bcrypt')
const User = require('./../models/userSchema')

exports.postUserSignIn = async (req,res) => {
  const email = req.body.email
  const password = req.body.password
  const user = await User.findOne({email: email})
  const isPasswordMatching  = await bcrypt.compare(password, user.password)

  if (isPasswordMatching){
    req.session.loggedIn = true
    res.status(200).send()
  } else {
    res.status(401).send()
  }
}