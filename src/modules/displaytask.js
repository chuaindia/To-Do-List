import check from './check.js';

const tasksList = document.querySelector('.tasks-list');

const displayTask = (obj) => {
  const { description, index } = obj;

  const task = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const taskDescription = document.createElement('input');
  const settings = document.createElement('div');
  const menuVerticalIcon = document.createElement('i');
  const taskMenu = document.createElement('ul');
  const optionDelete = document.createElement('li');
  const deleteIcon = document.createElement('i');

  task.classList.add('task');
  label.classList.add('label');
  checkbox.classList.add('checkbox-input');
  settings.classList.add('settings');
  taskDescription.classList.add('new-task-input');
  menuVerticalIcon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'settings');
  taskMenu.classList.add('task-menu', 'task-menu-visible');
  deleteIcon.classList.add('fa-solid', 'fa-trash', 'delete-icon');
  optionDelete.classList.add('delete');

  checkbox.id = `checkbox-${index}`;
  taskDescription.id = `description-${index}`;
  optionDelete.id = `${index}`;
  taskMenu.id = `${index}`;
  task.id = `${index}`;

  taskDescription.value = description;
  optionDelete.textContent = 'Delete';

  checkbox.type = 'checkbox';

  label.append(checkbox, taskDescription);
  optionDelete.append(deleteIcon);
  taskMenu.append(optionDelete);
  settings.append(menuVerticalIcon, taskMenu);
  task.append(label, settings);
  tasksList.append(task);

  check(obj);
};

export default displayTask;
