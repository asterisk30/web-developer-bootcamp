var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

// compile the schema into a model
var Campgound = mongoose.model('Campgound', campgroundSchema);

app.get('/', function(req, res) {
  res.render('landing');
})

app.get('/campground', function(req, res) {
  // get all campgrounds from DB
  Campgound.find({}, function(err, camp) {
    if(err) {
      console.log(err)
    } else {
      res.render('index', {campground:camp});
    }
  })
})

app.post('/campground', function(req, res) {
  // get data from form
  // add data to campground array
  // redirect to campground page
  let name = req.body.name;
  let img = req.body.image;
  let desc = req.body.desc;
  let newCamp = {
    name: name,
    image: img,
    description: desc
  }
  // create new campground and save to database
  Campgound.create(newCamp, function(err, newCamp) {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/campground');
    }
  });
})

app.get('/campgroundnew', function(req, res) {
  res.render('newcamp');
})

app.get('/campground/:id', function(req, res) {
  // find the campground with provided id
  Campgound.findById(req.params.id, function(err, foundCamp) {
    if (err) {
      console.log(err);
    } else {
      // render show template with that specific campground
      res.render('show', {campground: foundCamp});
    }
  })
})


app.listen(3000, function() {
  console.log('server is up.')
})