# What is API and how do we use API?

* API is short for Application Programming Interface. Just like human  can interact with applications through User Interface (UI), applications can interact with other applications through API.

* You can "bake" an API for your own application so that other applications can "call" the API and interact with your application

* You can use "curl + url" to send get request to servers through terminal, the response will be XML, HTML or JSON

* There is an npm package called "request" we can use to make http requests through node

```js
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

