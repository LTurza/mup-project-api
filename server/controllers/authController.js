const bcrypt = require('bcrypt')
const User = require('./../models/userSchema')
const jwt = require('jsonwebtoken')

exports.postUserSignIn = async (req,res) => {
  const email = req.body.email
  const password = req.body.password 
  const isUserExists = await User.exists({email: email})

  if (isUserExists) {
    const user = await User.findOne({email: email})
    const isPasswordMatching  = await bcrypt.compare(password, user.password)

    if (isPasswordMatching){
      const token = jwt.sign({
        expiresIn: Math.floor(Date.now() / 1000) + (60 * 60),
        id: user._id,
      }, process.env.JWT_SECRET)
      res.status(200).send(JSON.stringify({
        token: token,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._id,
      }))
    } else {
      res.status(401).send()
    } 
  } else {
    res.status(401).send()
  }
}

exports.validateToken = async (req, res, next) => {
  const currentDate = Math.floor(Date.now() / 1000)
  const tokenData = await jwt.verify(req.body.token, process.env.JWT_SECRET)
  const isUserExists = await User.exists({_id: tokenData.id})
  if ((tokenData.expiresIn >= currentDate && isUserExists)) {
    const user = await User.findById(tokenData.id)
    res.locals.token = jwt.sign({
      expiresIn: Math.floor(Date.now() / 1000) + (60 * 60),
      id: user._id,
    }, process.env.JWT_SECRET)

    next()
  } else {
    res.status(409).send()
  }
}
  