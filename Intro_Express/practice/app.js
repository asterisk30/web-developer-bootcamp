var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hi there, welcome')
})

app.get('/speak/:animal', function(req, res) {
  var sounds = {
    pig: '"Oink"',
    dog: '"Woof Woof"',
    cow: '"Mooo"'
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  let message = '';
  if (typeof sound == 'undefined') {
    message = 'Sorry no sound for your animal yet'
  } else {
    message = animal + " says " + sound;
  }
  res.send(message);
})

// for each request you can only get ONE response
app.get('/repeat/:string/:number', function(req, res) {
  var string = req.params.string;
  // use let because you want you variable to be only accessible inside of this scope
  let message = '';
  var number = Number(req.params.number);
  for( var i = 0; i < number; i++) {
    message += string;
  }
  res.send(message);
})

app.get('*', function(req, res) {
  res.send('Sorry page not found')
})
app.listen(3000, function() {
  console.log('server has started.')
});