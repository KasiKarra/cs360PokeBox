// Include Express
var express = require('express');
// Initialize the Router
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Expose the module
module.exports = router;
