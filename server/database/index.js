/**
 * Our Database Interface
 */
var mongoose = require('mongoose');

// Connections
var developmentDb = 'mongodb://localhost/test';
var productionDb = 'urlToProductionMongoDb';
var database;

if (process.env.NODE_ENV === 'development') {
    database = developmentDb;
    mongoose.connect(database);
}

if (process.env.NODE_ENV === 'production') {
    database = productionDb;
    mongoose.connect(database);
}

// Gets an instance of our connection to our database
var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));
// Open the connection
db.once('open', function callback () {
  console.log('Databsae Connection Successfully Opened at ' + database);
});