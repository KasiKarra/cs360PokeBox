/**
 * This handles the logging out of users
 */
var express = require('express');
var router = express.Router();
var db = require('../../database');
var Monster = db.monsters;

// Returns a starter Monster of the given type
router.get('/getStarter/:type', function (req, res) {
	Monster.findOne({'starter' : true, 'type' : req.params.type}, function(err, monster)  {
		if(err) {
			return done(err);
		}

		res.json(monster);
	});
});

// Returns a random Monster
router.get('/getRandom', function (req, res) {
	var monsterFilter = { starter: {$ne: true} };

	// There is a 10% chance of a starter Monster being returned
	var randomChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	if(randomChance < 10) {
		monsterFilter = {};
	}

	Monster.findRandom(monsterFilter, {}, {}, function(err, monsters) {
		if(err) {
			return done(err);
		}

		res.json(monsters[0]);
	});
});

// Export the router for usage in our server/router/index.js
module.exports = router;