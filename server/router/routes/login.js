/**
 * This handles the signing up of users
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');

// The POST /signup route
router.post('/', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) {
      return next(err); 
    }
    if (user === false) {
      res.status(401).json({
          'message': req.flash('loginMessage'),
          'info': info
      });  
    } else {
      res.json({
          'message': 'Successfully authenticated'
      });
    }
  })(req, res, next); 
});

// Export the router for usage in our server/router/index.js
module.exports = router;