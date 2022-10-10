
/* eslint-disable linebreak-style */
import './main.css';
import clearListContainer from './utils/clear-container.js';

listContainer = document.querySelector('[data-lists]');
todos = [
  {
    description: 'Cooking lunch ',
    completed: false,
    index: 1,
  },
  {
    description: 'Join Microverse program',
    completed: false,
    index: 2,
  },
  {
    description: 'Evening Walk',
    completed: false,
    index: 3,
  },
  {
    description: 'Watch the walking dead season 11 Finale',
    completed: false,
    index: 4,
  },
];

handleRender = () => {
  clearListContainer(listContainer);
  todos.forEach((todo) => {
    const listElement = document.createElement('li');
    listElement.classList.add('todo');
    listElement.innerHTML = `
    <div class="toggle">
    <span class="material-icons box">check_box_outline_blank</span>
    <div class="check-div">
    <span class="material-icons check">done</span>
    </div>
    </div>
    <div class="view">
    <p>${todo.description}</p>
    </div>
    <span class="material-icons move-icon">more_vert</span>
    `;
    listContainer.appendChild(listElement);
  });
};

handleRender();



