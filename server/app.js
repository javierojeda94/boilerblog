'use strict';

let express = require('express');
let app = express();

// serve static files from dist folder
app.use(express.static(__dirname + '/../client/dist'));

// posts routes
let posts = require('./routes/posts');
app.use('/posts', posts);

// start server
app.listen(8080, () => {
  console.log('Amazing app is on port 8080');
});
