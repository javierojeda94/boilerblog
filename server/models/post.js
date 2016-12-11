'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let relationship = require('mongoose-relationship');

// define the post schema
let postSchema = new Schema({
  author:{
    type: Schema.Types.ObjectId,
    ref: 'Author',
    childPath: 'posts'
  },
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
  versionKey: false
});

// create the relationship with the author
postSchema.plugin(relationship, { relationshipPathName: 'author' })

// create a model based on the previously created schema
let Post = mongoose.model('Post', postSchema);

// make it available
module.exports = Post;
