'use strict';

let express = require('express');
let router = express.Router();
let Author = require('../models/author');
let bodyParser = require('body-parser');

// configure app to use body-parser as a middleware
let parseUrlencoded = bodyParser.urlencoded({ extended: false });

router.route('/')
  .get((req, res) => {
    Author.find({}).populate('posts').exec((err, authors) => {
      if(err){
        res.json(err);
      }else{
        res.json(authors);
      }
    });
  })
  .post(parseUrlencoded, (req, res) => {
    let newAuthorAttributes = req.body;
    let author = new Author(req.body);
    author.save((err, author) => {
      if(err){
        err.messageForCustomer = 'Ocurrió un error al intentar crear un nuevo autor';
        res.json(err);
      }
      res.json(author);
    });
  });

router.route('/:id')
  .all((req, res, next) => {
    Author.findById(req.params.id).populate('posts').exec((err, author) => {
      if(author){y
        req.Author = author;
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
    res.json(req.Author);
  })
  .put(parseUrlencoded, (req, res) => {
    let newAuthorAttributes = req.body;
    Author.findByIdAndUpdate(req.Author._id, newAuthorAttributes, (err, author) => {
      if(err) {
        res.json(err);
      }
      res.json(Object.assign(author, newAuthorAttributes));
    });
  })
  .delete((req, res) => {
    req.Author.remove((err, author) => {
      if(err) {
        res.json(err);
      }
      res.json('Author deleted');
    });
  });

module.exports = router;
