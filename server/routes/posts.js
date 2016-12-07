let express = require('express');
let router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Posts list');
  });

router.route('/:id')
  .get((req, res) => {
    let id = req.params.id;
    res.send(`Id: ${id}`);
  });

module.exports = router;
