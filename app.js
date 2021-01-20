const todoContainer = document.querySelector('#todos');
const addItemForm = document.querySelector('#addTodo');
const inputTodo = document.querySelector('#addItem');

//add local storage
//function that adds the todos to local storage

// Retrieve
if (localStorage.getItem('todo') != null) {
	// document.getElementById('todos').innerHTML = localStorage.getItem('todo');
	let items = localStorage.getItem('todo').split(',');
	for (let i = 0; i < items.length; i++) {
		const newItem = document.createElement('li');
		const removeBtn = document.createElement('button');
		removeBtn.innerText = 'x';
		removeBtn.classList.add('delete');
		newItem.innerText = items[i];
		newItem.className = 'todo';
		newItem.appendChild(removeBtn);

		todoContainer.appendChild(newItem);
	}
}
//this is the delete btn
todoContainer.addEventListener('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	} else if (e.target.tagName === 'LI') {
		e.target.classList.toggle('complete');
	}
});
// this adds items to the todo
addItemForm.addEventListener('submit', function(e) {
	e.preventDefault();
	//console.log(inputTodo.value);
	const newItem = document.createElement('li');
	const removeBtn = document.createElement('button');
	removeBtn.innerText = 'x';
	removeBtn.classList.add('delete');
	newItem.innerText = inputTodo.value;
	newItem.className = 'todo';
	newItem.appendChild(removeBtn);

	todoContainer.appendChild(newItem);
	let localStorageString;
	if (localStorage.getItem('todo') != null) {
		localStorageString = localStorage.getItem('todo') + ',' + inputTodo.value;
	} else {
		localStorageString = inputTodo.value;
	}
	//local storage
	localStorage.setItem('todo', localStorageString);
	inputTodo.value = '';
});
