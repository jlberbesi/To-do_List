import './style.css';

const todoList = document.getElementById('todo-list');

class Task {
  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
  }
}

const tasks = [
  new Task('Wash the dishes'),
  new Task('Do some exercise'),
  new Task('Write a pull request'),
];

function renderTasks() {
  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', () => {
      task.completed = checkbox.checked;
      taskItem.classList.toggle('completed', task.completed);
    });
    const description = document.createElement('span');
    description.textContent = task.description;
    taskItem.appendChild(checkbox);
    taskItem.appendChild(description);
    taskItem.classList.toggle('completed', task.completed);
    todoList.appendChild(taskItem);
  });
}

renderTasks();
