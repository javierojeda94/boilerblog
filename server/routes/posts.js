'use strict';

let express = require('express');
let router = express.Router();
let Post = require('../models/post');
let bodyParser = require('body-parser');

// configure app to use body-parser as a middleware
let parseUrlencoded = bodyParser.urlencoded({ extended: false });

router.route('/')
  .get((req, res) => {
    Post.find({}, (err, posts) => {
      if(err){
        res.json(err);
      }else{
        res.json(posts);
      }
    });
  })
  .post(parseUrlencoded, (req, res) => {
    let newPostAttributes = req.body;
    let post = new Post(req.body);
    post.save((err, post) => {
      if(err){
        err.messageForCustomer = 'Ocurrió un error al intentar guardar el post';
        res.json(err);
      }
      res.json(post);
    });
  });

router.route('/:id')
  .all((req, res, next) => {
    Post.findById(req.params.id, (err, post) => {
      if(post){
        req.Post = post;
        next();
      }else{
        if(err) {
          res.json(err);
        }
        res.sendStatus(404);
      }
    });
  })
  .get((req, res) => {
    res.json(req.Post);
  })
  .put(parseUrlencoded, (req, res) => {
    let newPostAttributes = req.body;
    Post.findByIdAndUpdate(req.Post._id, newPostAttributes, (err, post) => {
      if(err) {
        res.json(err);
      }
      res.json(Object.assign(post, newPostAttributes));
    });
  })
  .delete((req, res) => {
    req.Post.remove((err, post) => {
      if(err) {
        res.json(err);
      }
      res.json('Post deleted');
    });
  });

module.exports = router;
