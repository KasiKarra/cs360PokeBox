/**
 * This handles the signing in of users
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');

// route for facebook authentication and login
router.get('/facebook', passport.authenticate('facebook', { scope : 'email' }));

router.get('/facebook/callback',
passport.authenticate('facebook', {
    successRedirect : '/#/profile',
    failureRedirect : '/'
}));

router.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

router.get('/google/callback',
passport.authenticate('google', {
        successRedirect : '/#/profile',
        failureRedirect : '/'
}));

// Export the router for usage in our server/router/index.js
module.exports = router;