var mongoose = require('mongoose'),
    Campground = require('./models/campground'),
    Comment = require('./models/comment');

var data = [
  {
    name: 'Forest',
    image: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/europeslostf.jpg',
    description: 'This is a forest campground'
  },
  {
    name: 'River',
    image: 'https://www.waggawaggaaustralia.com.au/imagesDB/gallery/DSC_2508.jpg',
    description: 'This is a river campground'
  },
  {
    name: 'Beach',
    image: 'https://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/Experiences_Beach.jpg',
    description: 'This is a beach campground'
  },
  {
    name: 'Plain',
    image: 'https://media.nationalgeographic.org/assets/photos/000/255/25557.jpg',
    description: 'This is a plain campground'
  }
];

var comment = {
  text: 'This place is really hot',
  author: 'Some Good Guy'
}

function seedDB() {
  // remove all the comments
  Comment.remove({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('removed comments');
      // remove all the campgrounds
      Campground.remove({}, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('removed campgrounds');
          // create new campgrounds
          data.forEach(seed => {
            Campground.create(seed, function(err, campground) {
              if (err) {
                console.log(err);
              } else {
                console.log('added new campgrounds');
                // add comments to new campgrounds
                Comment.create(comment, function(err, comment) {
                  if (err) {
                    console.log(err);
                  } else {
                    // link comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    console.log('comment added');
                  }
                })
              }
            })
          })
        }
      });
    }
  });

}

module.exports = seedDB;