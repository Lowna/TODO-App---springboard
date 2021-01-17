const todoContainer = document.querySelector('#todos');
const addItemForm = document.querySelector('#addTodo');
const inputTodo = document.querySelector('#addItem');
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
	inputTodo.value = '';
	todoContainer.appendChild(newItem);
});

/* verson of todo list without event delegation */
// const removeItem = document.querySelectorAll('.todos li');
// const todoContainer = document.querySelector('#todos');
// const addItemForm = document.querySelector('#addTodo');
// const inputTodo = document.querySelector('#addItem');
// //this is the delete btn
// for (let deleteBtn of removeItem) {
// 	deleteBtn.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 		console.log(e);
// 	});
// }

// // this adds items to the todo
// addItemForm.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	console.log(inputTodo.value);
// 	const newItem = document.createElement('li');
// 	const removeBtn = document.createElement('button');
// 	removeBtn.innerText = 'x';
// 	removeBtn.addEventListener('click', function(e) {
// 		e.target.parentElement.remove();
// 	});
// 	newItem.innerText = inputTodo.value;
// 	newItem.className = 'todo';
// 	newItem.appendChild(removeBtn);
// 	inputTodo.value = '';
// 	todoContainer.appendChild(newItem);
// });
/*This represents toggling for anything*/
// const emotion = document.querySelector('h2');
// setInterval(function() {
// 	if (emotion.classList.contains('big')) {
// 		emotion.innerText = 'sad'.toUpperCase();
// 	} else {
// 		emotion.innerText = 'happy'.toUpperCase();
// 	}
// 	emotion.classList.toggle('big');
// 	emotion.classList.toggle('small');
// }, 500);
