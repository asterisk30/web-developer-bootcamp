/* Arrays are contained inside of [] */

/* Objects are contained inside of {} */

/* Arrays are special objects with number-only keys and keys are in certain order */

/* Objects can have different type of keys and they are not ordered */

/* Arrays and Objects are usually nested in most usecases */

// posting comments array

var postingComments = [
  {
    user: 'Alice',
    title: 'Software Engineer',
    comments: ['Hi this is awersome', 'I like the video a lot']
  },
  {
    user: 'Eric',
    title: 'Cloud Engineer',
    comments: ['Hi this is lame', 'I hate the video a lot']
  },
  {
    user: 'James',
    title: 'Staff Engineer',
    comments: ['haha']
  }
]

// movieDB

var movieDB = [
  {
    title: 'Pulp Fiction',
    rating: '5 stars',
    hasWatched: true
  },
  {
    title: 'The Hateful 8',
    rating: '4 stars',
    hasWatched: true
  },
  {
    title: 'Deathproof',
    rating: '5 stars',
    hasWatched: false
  }
]

movieDB.forEach(element => {
  if (element.hasWatched === true) {
    console.log('You have watched "' + element.title + '" - ' + element.rating)
  } else {
    console.log('You have not seen "' + element.title + '" - ' + element.rating)
  }
})