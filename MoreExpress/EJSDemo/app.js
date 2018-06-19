var express = require('express');
var app = express();
let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});

app.get('/', function(req, res) {
  res.render('love.ejs');
})

app.get('/:thing', function(req, res) {
  var thing = req.params.thing;
  res.render('love.ejs', {thing: thing});
})


app.listen(3000, function() {
  console.log('server is up.')
})