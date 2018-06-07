var action = prompt("What would you like to do?");
var todoList = [];
while (action !== 'quit') {
  if (action === 'new') {
    var item = prompt('Enter item to do.')
    todoList.push(item);
  } else if (action === 'list') {
    console.log(todoList);
  }
  action = prompt("What would you like to do?");
}

console.log('OK you quit the app.');