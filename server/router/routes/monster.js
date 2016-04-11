/**
 * This handles the logging out of users
 */
var express = require('express');
var router = express.Router();
var db = require('../../database');
var Monster = db.monsters;

// The GET /profile route
router.get('/getStarter/:type', function (req, res) {
	Monster.findOne({'starter' : true, 'type' : req.params.type}, function(err, monster)  {
		if(err) {
			return done(err);
		}

		res.json(monster);
	});
});

// Export the router for usage in our server/router/index.js
module.exports = router;