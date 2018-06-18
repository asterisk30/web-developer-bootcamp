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

// tell express to listen for requests (start server)
app.listen(3000, function() {
  console.log('server has started.')
});