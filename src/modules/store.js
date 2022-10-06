import createObj from './taskObj.js';
import displayTask from './displayTask.js';

const taskInput = document.getElementById('task');
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

if (todos.length !== 0) {
  todos.forEach((task) => {
    displayTask(task);
  });
}

const changeValue = () => {
  taskInput.addEventListener('keyup', (e) => {
    const userTask = taskInput.value.trim();
    if (e.key === 'Enter' && userTask) {
      const taskInfo = createObj(userTask, todos.length);
      todos.push(taskInfo);
      localStorage.setItem('todo-list', JSON.stringify(todos));
      displayTask(taskInfo);
      taskInput.value = '';
      window.location.reload();
    }
  });
};

export default changeValue;
export { todos };