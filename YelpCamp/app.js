var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Campgound = require('./models/campground'),
    Comment = require('./models/comment'),
    seedDB = require('./seeds'),
    app = express();

seedDB();
mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// =====================================
// Campground routes
// =====================================

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
  Campgound.findById(req.params.id).populate('comments').exec( function(err, foundCamp) {
    if (err) {
      console.log(err);
    } else {
      // render show template with that specific campground
      res.render('show', {campground: foundCamp});
    }
  })
})


// =====================================
// Comment routes
// =====================================
app.post('/campground/:id', function(req, res) {
  // look up campground using id
  Campgound.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.redirect('/campground');
    } else {
      // create new comment in DB
      let newcomment = req.body.comment;
      newcomment.author = 'Some Good Guy';
      Comment.create(newcomment, function(err, newcomment) {
        if (err) {
          console.log(err);
          res.redirect('/campground');
        } else {
          // connect comment to campground
          campground.comments.push(newcomment);
          campground.save();
          // redirect to show page
          res.redirect(302, '/campground/' + campground._id);
        }
      });
    }
  })
})


app.listen(3000, function() {
  console.log('server is up.')
})