var msg = '';

while (msg.indexOf('yes') === -1 && msg.indexOf('yeah') === -1) {
  msg = prompt('Are we there yet?');
  console.log(msg);
}

alert('Yay we finally made it!');