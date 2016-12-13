'use strict';

let express = require('express');
let app = express();
let mongoose = require('mongoose');
// models
let authors = require('./routes/authors');
let posts = require('./routes/posts');
// use a loger for requests
let logger = require('./logger');
app.use(logger);

// connect to database
mongoose.connect('mongodb://localhost/boilerblog');

// serve static files from client/dist folder
app.use(express.static(__dirname + '/../client/dist'));

// models routes
app.use('/authors', authors);
app.use('/posts', posts);

// start server
app.listen(8080, () => {
  console.log(Date());
  console.log('Amazing app is on port 8080');
});
