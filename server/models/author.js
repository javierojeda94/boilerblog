'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// define the author schema
let authorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  bio: String
},{
  versionKey: false
});

// create a model based on the previously created schema
let Author = mongoose.model('Author', authorSchema);

// make it available
module.exports = Author;
