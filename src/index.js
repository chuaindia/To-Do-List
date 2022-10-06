import './style.css';
import _ from 'lodash';


const list = [
	{
		description: 'Cooking',
		completed: true,
		index: 0
	},
	{
		description: 'Bathing',
		completed: true,
		index: 1
	},
	{
		description: 'Washing clothes',
		completed: true,
		index: 2
	},
	{
		description: 'worshipping God',
		completed: true,
		index: 3
	},
	{
		description: 'Go through the learning materials',
		completed: true,
		index: 4
	},
	{
		description: 'Go for Marketing',
		completed: true,
		index: 5
	},
	{
		description: 'Go for necessary shopping',
		completed: true,
		index: 6
	},
	{
		description: 'Visit neighbours',
		completed: true,
		index: 7
	},
	{
		description: 'Prepare Dinner',
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



