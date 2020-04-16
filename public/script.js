var ulTaskList = document.getElementById('ulTaskList')

function addTask() {
    let task = document.getElementById('task').value
    let desc = document.getElementById('desc').value
    let due = document.getElementById('due').value
    let priority = document.getElementById('priority').value
    console.log(task+ desc+due+ priority)
    addNewTask(task, desc, due, priority)
}

async function addNewTask(task, desc, due, priority) {
  const resp = await fetch('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify({ task, desc, due, priority })
  })
}

async function showTasks() {
  const resp = await fetch('/tasks', { method: 'GET' })
  const tasks = await resp.json()
  for (let task of tasks) {
    const newItem = document.createElement('div')
    newItem.classList.add("container", "p-3", "my-3", "bg-dark", "text-white")
    const taskName = document.createElement('div')
    taskName.textContent = 'Task Name: ' + task.task
    const description = document.createElement('div')
    description.textContent = 'Description: ' + task.description
    const due = document.createElement('div')
    due.textContent = 'Due Date: ' + task.due.split('T')[0]
    const status = document.createElement('div')
    var st = 'Incomplete'
    if(task.completed === true)
      st = 'Complete'
    status.textContent = 'Status: ' + st
    const priority = document.createElement('div')
    priority.textContent = 'Priority: ' + task.priority
    const notes = 
    newItem.appendChild(taskName)
    newItem.appendChild(description)
    newItem.appendChild(due)
    newItem.appendChild(status)
    newItem.appendChild(priority)
    ulTaskList.appendChild(newItem)
  }
}

showTasks()