const Task = require('./../models/taskSchema')
const Organization = require('./../models/organizationSchema')
const isStringValidObjectId = require('./../utils/isStringValidObjectId')
const { newTaskDataSchema } = require('./../validation/taskValidationSchema')
const Ajv = require('ajv')

const ajv = new Ajv()

exports.postNewTask = async (req, res) => {
  const { title, description, organizationId } = req.body
  const isOrganizationValid = isStringValidObjectId(organizationId)

  if (isOrganizationValid) {
    const organization = await Organization.findById({_id: organizationId})
    const task = new Task({
      title,
      description,
      organizationId,
      userAssigned: '',
      status: 'todo',
    })
    organization.tasks.push(task)
    Promise.all([
      task.save(),
      Organization.updateOne({_id: organization._id}, {tasks: organization.tasks})
    ])
      .then(result => {
        if (result[0] && result[1]) {
          res.status(200).send()
        } else {
          res.status(400).send()
        }
      })
  }
}

exports.putUpdateStatus = async (req, res) => {
  const { taskId, organizationId, status } = req.body
  const isTaskIdValid = isStringValidObjectId(taskId)
  const isOrganizationIdValid = isStringValidObjectId(organizationId)
  if (isTaskIdValid && isOrganizationIdValid) {
    const organiaztion = await Organization.findById(organizationId)
    let tasks = []
    organiaztion.tasks.forEach(elem => {
      if (elem._id + '' === taskId) {
        elem.status = status
      }
      tasks.push(elem)
    })
    console.log(tasks);
    await Organization.updateOne({_id: organizationId}, {tasks})
    res.status(200).send()
  } else {
    res.status(400).send()
  }
}