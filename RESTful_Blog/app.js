// include packages and basic app config

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/restful_blog_app');


// mongoose schema config

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  blog: String,
  created: {type: Date, default: Date.now()}
})

// mongoose model config

var Blog = mongoose.model('Blog', blogSchema);


// RESTful routes

app.get('/', function(req, res) {
  res.redirect('/blogs');
})

// INDEX
app.get('/blogs', function(req, res) {
  // display all blogs
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log(err)
    } else {
      res.render('index', {blogs: blogs});
    }
  })
})

// NEW
app.get('/blogs/new', function(req, res) {
  // display new form
  res.render('newblog');
})

// CREATE
app.post('/blogs', function(req, res) {
  // create new blog and save in database
  Blog.create(req.body.blog, function(err, blog) {
    if (err) {
      res.render('newblog');
    } else {
      res.redirect('/blogs');
    }
  })
})

// SHOW
app.get('/blogs/:id', function(req, res) {
  // display single blog based on id
  res.render('blog');
})

// EDIT
app.get('/blogs/:id/edit', function(req, res) {
  // display edit form
  res.render('editblog');
})

// UPDATE
app.put('/blogs/:id', function(req, res) {
  // update single blog and save in database
  res.redirect('/blogs/:id');
})

// DESTROY
app.delete('/blogs/:id', function(req, res) {
  // delete single blog and redirect to all blogs
  res.redirect('/blogs');
})


app.listen(2000, function() {
  console.log('server is up at port 2000.');
})