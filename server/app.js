'use strict';

let express = require('express');
let app = express();
let mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/boilerblog');

// serve static files from client/dist folder
app.use(express.static(__dirname + '/../client/dist'));

// posts objects
let posts = require('./routes/posts');
app.use('/posts', posts);

// start server
app.listen(8080, () => {
  console.log(Date());
  console.log('Amazing app is on port 8080');
});
