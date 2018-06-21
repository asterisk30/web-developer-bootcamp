var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
});

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temp: String
})

var Cat = mongoose.model('Cat', catSchema);

// var john = new Cat ({
//   name: 'John Doe',
//   age: 16,
//   temp: 'Mild'
// });

// john.save(function(err, cat) {
//   if (err) {
//     console.log('Oops wrong');
//   } else {
//     console.log(cat.name + ' got saved successfully.');
//   }
// })

Cat.create({
  name: 'Joseph',
  age: 10,
  temp: 'weird'
}, function(err, cat) {
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
})


Cat.find({}, function(err, cats) {
  if (err) {
    console.log('Error: ' + err);
  } else {
    console.log(cats);
  }
})