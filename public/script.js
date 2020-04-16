function addTask() {
    let task = document.getElementById('task').value
    let desc = document.getElementById('desc').value
    let due = document.getElementById('due').value
    let priority = document.getElementById('priority').value
    // task = {
    //     task: task,
    //     desc: desc,

    // }
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