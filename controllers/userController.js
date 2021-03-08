const User = require('./../models/user')

exports.postUserSignUp = (req,res) => {
  const userData = req.body.userData
  const user = new User(userData.firstName, userData.secondName, userData.email, userData.password)
  console.log(user)
  user.save()
    .then(result => {
      console.log('User was registred successfully!')
      res.status(201).send()
    })
    .catch(err => conosle.err(err))
}