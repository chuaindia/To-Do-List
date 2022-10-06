const clearButton = document.querySelector('.clear-button');

const clear = () => {
  clearButton.addEventListener('click', () => {
    let todos = JSON.parse(localStorage.getItem('todo-list'));
    todos = todos.filter((todo) => todo.completed === false);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    window.location.reload();
  });
};

export default clear;