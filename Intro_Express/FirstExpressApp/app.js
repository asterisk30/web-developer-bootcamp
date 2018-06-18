var express = require('express');
var app = express();

// "/" => "Hi there"
app.get('/', function(req, res) {
  res.send('Hi there');
});

// "/bye" => "bye there"
app.get('/bye', function(req, res) {
  res.send('bye there');
});

// "/dog" => "Hi there dog"
app.get('/dog', function(req, res) {
  res.send('Hi there dog');
});

// route patterns
app.get('/r/:something', function(req, res) {
  res.send('welcome to something');
  console.log(req.params);
})

// route pattern for further down items
app.get('/r/:something/:somethingElse/:someMoreThings', function(req, res) {
  res.send('you are at some more things now.');
  console.log(req.params);
})
// "*" => "Hi star" -- * will direct you to any other route that is not specified yet
app.get('*', function(req, res) {
  res.send('Hi star');
});


// tell express to listen for requests (start server)
app.listen(3000, function() {
  console.log('server has started.')
});