document.addEventListener('DOMContentLoaded', () => {
  // Load tasks from local storage
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => addTaskToDOM(task.text, task.completed));

  // Add event listener for new task input
  document.getElementById('new-task').addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});

function addTask() {
  const inputElement = document.getElementById('new-task');
  const taskText = inputElement.value.trim();

  if (taskText === '') {
      alert('Please enter a task.');
      return;
  }

  addTaskToDOM(taskText, false);
  inputElement.value = '';

  // Save tasks to local storage
  saveTasksToLocalStorage();
}

function addTaskToDOM(taskText, completed) {
  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  const taskActions = document.createElement('div');
  taskActions.classList.add('task-actions');

  const completeButton = document.createElement('button');
  completeButton.innerText = completed ? 'Uncomplete' : 'Complete';
  completeButton.addEventListener('click', () => toggleComplete(taskItem));

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.addEventListener('click', () => editTask(taskItem));

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => deleteTask(taskItem));

  taskActions.appendChild(completeButton);
  taskActions.appendChild(editButton);
  taskActions.appendChild(deleteButton);

  taskItem.innerHTML = `
      <span class="${completed ? 'complete' : ''}">${taskText}</span>
  `;
  taskItem.appendChild(taskActions);
  taskList.appendChild(taskItem);
}

function toggleComplete(taskItem) {
  const taskText = taskItem.querySelector('span');
  taskText.classList.toggle('complete');
  saveTasksToLocalStorage();
}

function editTask(taskItem) {
  const taskText = taskItem.querySelector('span');
  const newText = prompt('Edit task:', taskText.innerText);

  if (newText !== null) {
      taskText.innerText = newText;
      saveTasksToLocalStorage();
  }
}

function deleteTask(taskItem) {
  if (confirm('Are you sure you want to delete this task?')) {
      taskItem.remove();
      saveTasksToLocalStorage();
  }
}

function saveTasksToLocalStorage() {
  const tasks = [];
  const taskList = document.getElementById('task-list').children;

  for (const taskItem of taskList) {
      const taskText = taskItem.querySelector('span').innerText;
      const completed = taskItem.querySelector('span').classList.contains('complete');
      tasks.push({ text: taskText, completed });
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}