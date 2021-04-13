const bcrypt = require('bcrypt')
const User = require('./../models/userSchema')
const isStringValidObjectId = require('./../utils/isStringValidObjectId')
const {
  newUserDataSchema,
  updateUserDataSchema,
  changeUserPasswordSchema,
  fetchUsersSchema
} = require('./../validation/userValidationSchema')
const Ajv = require('ajv')

const ajv = new Ajv()

exports.postNewUser = async (req, res) => {
  const validate = ajv.compile(newUserDataSchema)
  const isValid = validate(req.body)
  const email = req.body.email

  const isUserExists = await User.exists({email: email})

  if (!isUserExists && isValid) {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: encryptedPassword,
      email,
    })
    await newUser.save()
    res.status(201).send()
  } else {
    res.status(409).send()
  }
}

exports.putUpdateUser = async (req, res) => {
  const validate = ajv.compile(updateUserDataSchema)
  const isValid = validate(req.body)
  const isUserIdValid = isStringValidObjectId(req.params.userId)
  if (isValid && isUserIdValid) {
    await User.findByIdAndUpdate(req.params.userId, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })
    res.status(200).send()
  } else {
    res.status(400).send()
  }
}

exports.putChangeUserPassword = async (req, res) => {
  const validate = ajv.compile(changeUserPasswordSchema)
  const isValid = validate(req.body)

  if (isValid) {
    const userData = await User.findById(req.params.userId)
    const isOldPasswordValid = await bcrypt.compare(req.body.oldPassword, userData.password)
    if (isOldPasswordValid) {
      userData.password = await bcrypt.hash(req.body.newPassword, 10)
      await userData.save()
      res.status(200).send()
    } else {
      res.status(401).send()
    }
  } else {
    res.status(400).send()
  }
}

exports.getFetchUsers = async (req, res) => {
  const users = await User.find({}).skip(+req.params.skip).limit(10)
  res.status(200).json(users)
}

exports.getUserCount = async (req, res) => {
  const validate = ajv.compile(fetchUsersSchema)
  const isValid = validate(req.body)
  console.log(isValid)

  if (isValid) {
    const userCount = await User.count()
    res.status(200).json(userCount)
  } else {
    res.status(400).send()
  }
}
