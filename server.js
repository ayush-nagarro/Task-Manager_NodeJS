const express = require('express')
const { db } = require('./db')
const taskRoute = require('./routes/tasks')

const app = express()

app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/tasks', taskRoute)

db.sync()
  .then(() => {
    app.listen(6999)
  })
  .catch((err) => {
    console.error(err)
  })