const check = (obj) => {
    const checkbox = document.getElementById(`checkbox-${obj.index}`);
    const taskName = checkbox.parentElement.lastElementChild;
    checkbox.addEventListener('click', () => {
      const todos = JSON.parse(localStorage.getItem('todo-list'));
      if (checkbox.checked === true) {
        taskName.classList.add('checked');
        todos[obj.index].completed = true;
        localStorage.setItem('todo-list', JSON.stringify(todos));
      } else {
        taskName.classList.remove('checked');
        todos[obj.index].completed = false;
        localStorage.setItem('todo-list', JSON.stringify(todos));
      }
      window.location.reload();
    });
  };
  
  const checkUpdate = (obj) => {
    const checkbox = document.getElementById(`checkbox-${obj.index}`);
    const taskName = document.getElementById(`description-${obj.index}`);
    if (obj.completed === true) {
      checkbox.checked = true;
      taskName.classList.add('checked');
    } else {
      checkbox.checked = false;
      taskName.classList.remove('checked');
    }
  };
  
  export { checkUpdate };
  
  export default check;
  