const myTodos = ['Buy Bread', 'Go to gym', 'Record youtube videos'];

console.log(myTodos.indexOf('Buy bread'));	// -1
console.log(myTodos.indexOf('Buy Bread'));	// 0
console.log(myTodos[myTodos.indexOf('Buy Bread')]);	// Buy Bread

const newTodos = [
	{
		title: 'Buy Bread',
		isDone: false
	},
	{ 
		title: 'Go to GYM',
		isDone: true
	},
	{
		title: 'Record YouTube videos',
		isDone: false
	}
];

const index = newTodos.findIndex((todo, index) =>(
	todo.title === 'Go to GYM'
))

console.log(index);
