import './styles.css';
import changeValue from './modules/store.js';
import deleteTask from './modules/delete.js';
import editTask from './modules/editTask.js';
import { checkUpdate } from './modules/check.js';
import clear from './modules/removeAll.js';

const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

if (todos.length !== 0) {
  editTask();
  deleteTask();
}

window.addEventListener('load', () => {
  todos.forEach((e) => {
    checkUpdate(e);
  });
});

clear();
changeValue();
