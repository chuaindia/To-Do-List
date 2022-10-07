import _ from 'lodash';
import './style.css';

const tasks = [
	{
		description: 'Morning Walk',
		completed: true,
		index: 0
	},
	{
		description: 'Prepare Breakfast',
		completed: true,
		index: 1
	},
	{
		description: 'Go shopping: ',
		completed: true,
		index: 2
	},
	{
		description: 'Prepare Lunch',
		completed: true,
		index: 3
	},
	{
		description: 'Learning Microverse materials',
		completed: true,
		index: 4
	},
	{
		description: 'Do the unfinished activities',
		completed: true,
		index: 5
	},
	{
		description: 'Shopping',
		completed: true,
		index: 6
	},
	{
		description: 'Prepare Dinner',
		completed: true,
		index: 7
	},
	{
		description: 'Evening Walk',
		completed: true,
		index: 8
	},
	{
		description: 'Prayer',
		completed: true,
		index: 9
	},
	{
		description: 'Reading',
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
