var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('search')
})

app.get('/results', function(req, res) {
  let query = req.query.search;
  let url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb';
  request(url, function(error, response, body) {
    if (error) {
      console.log('error: ', error);
    } else {
      if (response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render('results', {data: data});
      }
    }
   })
})

app.listen(500, function() {
  console.log('server is up.')
})
