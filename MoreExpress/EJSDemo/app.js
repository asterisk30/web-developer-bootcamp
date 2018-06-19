var express = require('express');
var app = express();
let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});

// include directories other than view
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home.ejs');
})

app.get('/:thing', function(req, res) {
  var thing = req.params.thing;
  res.render('love.ejs', {thing: thing});
})

app.get('/p/posts', function(req, res) {
  var posts = [
    {title: 'blah', name: 'little black'},
    {title: 'blaaah', name: 'little blaaack'},
    {title: 'blaaaaaah', name: 'little blaaaaack'},
    {title: 'blaaaaaaaaah', name: 'little blaaaaaack'}
  ];
  res.render('posts.ejs', {posts:posts});
})


app.listen(3000, function() {
  console.log('server is up.')
})