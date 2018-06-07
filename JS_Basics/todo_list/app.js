var action = prompt("What would you like to do?");
var todoList = [];
while (action !== 'quit') {
  if (action === 'new') {
    var item = prompt('Enter item to do.')
    todoList.push(item);
    console.log('new item added to the list.');
  } else if (action === 'list') {
    todoList.forEach(function(item, index) {
      console.log('**********');
      console.log(index + ': ' + item);
      console.log('**********');
    })
  } else if (action === 'delete') {
    var item = prompt('Enter the item you want to delete');
    // splice the array
    todoList.splice(todoList.indexOf(item), 1);
  }
  action = prompt("What would you like to do?");
}

console.log('OK you quit the app.');