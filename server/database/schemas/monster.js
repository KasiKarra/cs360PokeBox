/**
 * Our Schema for Users
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the User Schema
var monsterSchema = new Schema({

    hp               : Number,
    type             : String,
    name             : String,
    basePower        : Number,
    powerMultiplier  : Number,
    image            : String,
    starter          : {type : Boolean, defalt: false}

});

// The primary user model
var Monster = mongoose.model('Monster', monsterSchema);

module.exports = Monster;