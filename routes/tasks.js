const { Router } = require('express')
const { Tasks } = require('../db')

const route = Router()

route.get('/', async (req, res) => {
  const tasks = await Tasks.findAll()
  res.send(tasks)
})

route.get('/:id', async (req, res) => {
  if (isNaN(Number(req.params.id))) {
    return res.status(400).send({
      error: 'task id must be an integer',
    })
  }
  const task = await Tasks.findByPk(req.params.id)
  if (!task) {
    return res.status(404).send({
      error: 'No task found with id = ' + req.params.id,
    })
  }
  res.send(task)
})

route.post('/', async (req, res) => {
  if (typeof req.body.task !== 'string') {
    return res.status(400).send({ error: 'Task name not provided' })
  }
  
  const newTask = await Tasks.create({
      task: req.body.task,
      description: req.body.desc,
      due: req.body.due,
      priority: req.body.priority
  })
  res.status(201).send({ success: 'New task added', data: newTask })
})

module.exports = route