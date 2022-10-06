import _ from 'lodash';
import './style.css';

const tasks = [
	{
		description: 'Go to the GYM',
		completed: true,
		index: 0
	},
	{
		description: 'Read ES6 book',
		completed: true,
		index: 1
	},
	{
		description: 'Go shopping: ',
		completed: true,
		index: 2
	},
	{
		description: 'Wash clothes',
		completed: true,
		index: 3
	},
	{
		description: 'Add New Feature to the app',
		completed: true,
		index: 4
	},
	{
		description: 'Go camping',
		completed: true,
		index: 5
	},
	{
		description: 'Go to church',
		completed: true,
		index: 6
	},
	{
		description: 'Cook lunch',
		completed: true,
		index: 7
	},
	{
		description: 'Go out',
		completed: true,
		index: 8
	}

]

const myContainer = document.getElementById('to-do-list');
tasks.forEach((item) => {
	myContainer.innerHTML += `
	<ul class='list-container'>
		<li class='list-items'>
		<input type="checkbox" id="check">
		${item.description}
		</li>
	</ul>
`;
});

myContainer.innerHTML += `
<div class='footer-list'>
	<a href='#' class='footer-a'>Clear all completed</a>
</div>
`;