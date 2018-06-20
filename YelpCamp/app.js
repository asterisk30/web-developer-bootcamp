var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');
})

var campground = [
  {
    name: 'Hill',
    image: 'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  },
  {
    name:'Mountain',
    image:'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  },
  {
    name: 'Forest',
    image:'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  }, 
  {
    name: 'Hill',
    image: 'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  },
  {
    name:'Mountain',
    image:'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  },
  {
    name: 'Forest',
    image:'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  }, 
  {
    name: 'Hill',
    image: 'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  },
  {
    name:'Mountain',
    image:'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  },
  {
    name: 'Forest',
    image:'https://www.canadapost.ca/cpc/assets/cpc/uploads/illustrations/small/special-discounts.svg'
  }
];

app.get('/campground', function(req, res) {
  res.render('campground', {campground:campground});
})

app.post('/campground', function(req, res) {
  // get data from form
  // add data to campground array
  // redirect to campground page
  let name = req.body.name;
  let img = req.body.image;
  let newCamp = {
    name: name,
    image: img
  }
  campground.push(newCamp);
  res.redirect('/campground');
})

app.get('/campgroundnew', function(req, res) {
  res.render('newcamp');
})

app.listen(3000, function() {
  console.log('server is up.')
})