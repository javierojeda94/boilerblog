'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// define the post schema
let postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  created_at:{
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at:{
    type: Date
  }
},{
  versionKey: 'updates_count'
});

// create a model based on the previously created schema
let Post = mongoose.model('Post', postSchema);

// make it available
module.exports = Post;
