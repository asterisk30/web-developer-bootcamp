var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
var friends = ['Tony', 'Kevin', 'Masa'];
app.get('/', function(req, res) {
  res.render('home');
})

app.post('/addfriend', function(req, res) {
  friends.push(req.body.newfriend);
  res.redirect('/friends');
})

app.get('/friends', function(req, res) {
  res.render('friends', {friends: friends});
})

app.listen(300, function() {
  console.log('server is up.')
})