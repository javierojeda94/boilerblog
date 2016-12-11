'use strict';

let mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

// define the author schema
let authorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true,
    unique: true
  },
  bio: String,
  posts:[{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
},{
  versionKey: false
});

// add the unique validator for the unique:true
authorSchema.plugin(uniqueValidator);

// create a model based on the previously created schema
let Author = mongoose.model('Author', authorSchema);

// make it available
module.exports = Author;
