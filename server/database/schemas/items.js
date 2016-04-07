/**
 * Our schema for items and inventory
 */

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    item: {
        name: String,
        cost: Number,
        count: Number
    }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;