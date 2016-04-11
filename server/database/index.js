/**
 * Our Database Interface
 */
var mongoose = require('mongoose');
var UserModel = require('./schemas/user');
var MonsterModel = require('./schemas/monster');

// Connections
var developmentDb = 'mongodb://localhost/test';
var productionDb = 'urlToProductionMongoDb';
var database;

var environment = process.env.NODE_ENV || 'development';

if (environment === 'development') {
    database = developmentDb;
    mongoose.connect(database);
    mongoose.set('debug', true);
}

if (environment === 'production') {
    database = productionDb;
    mongoose.connect(database);
}

// Gets an instance of our connection to our database
var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));

// Open the connection
db.once('open', function callback () {
	console.log('Database Connection Successfully Opened at ' + database);

 	 // Initialize database with data if empty
	var MonsterData = require('../config/data/monsters.json');
	MonsterModel.count(function(err, result) {
		if(result === 0) {
			console.log('Populating database with default monsters...');
			MonsterModel.insertMany(MonsterData);
		}
	});
});

exports.users = UserModel;
exports.monsters = MonsterModel;