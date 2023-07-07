const taskName = document.querySelector('.taskName')
const subTaskName = document.querySelector('.subTaskName')
const subTaskTime = document.querySelector('.subTaskTime')
const list = document.querySelector('.list')
const subMenuTask = document.querySelector('.subMenuTask')

let subTasks = []

function addTask () {
  if (subTasks.length > 0 && taskName.value != '') {
    let task = document.createElement('task')
    task.innerHTML = `<div class='m10'><strong>${taskName.value}</strong></div>`
    list.append(task)
    subTasks.forEach(subTask => renderSubTask(subTask))
    subMenuTask.innerHTML = ''
    taskName.value = ''
    subTasks = []
    }
}

function addSubTask() {
  let subTaskObj = {
    id: Date.now(),
    name: subTaskName.value,
    time: subTaskTime.value
  }
  
  if (subTaskObj.name != '' && subTaskObj.time != '') { 
    let subTask = document.createElement('subTask')
    subTask.innerHTML = `<div id='${subTaskObj.id}'>${subTaskObj.name} ${subTaskObj.time}ч.<button class='btnR' onclick='removeSubTask(this)'>Удалить</button></div>`
    subMenuTask.append(subTask)
    subTasks.push(subTaskObj)
    subTaskName.value = ''
    subTaskTime.value = ''
    }
}

function removeSubTask(elem) {
  let id = elem.parentNode.id
  subTasks = subTasks.filter(el => el.id != id)
  elem.parentNode.remove()
}

function renderSubTask(subTask) {
  let subTaskHTML = document.createElement('subTask')
  subTaskHTML.innerHTML = `<div>${subTask.name} ${subTask.time}ч.</div>`
  list.append(subTaskHTML)
}

function saveToLS() {
  localStorage.setItem('taskList', list.innerHTML)
}

function loadLS() {
  list.innerHTML = localStorage.getItem('taskList')
}