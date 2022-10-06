const task = document.querySelectorAll('.task');

const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

const editTask = () => {
  task.forEach((t) => {
    t.addEventListener('click', () => {
      const newTaskInput = document.getElementById(`description-${t.id}`);
      newTaskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          todos[t.id].description = newTaskInput.value;
          localStorage.setItem('todo-list', JSON.stringify(todos));
        }
      });
    });
  });
};

export default editTask;