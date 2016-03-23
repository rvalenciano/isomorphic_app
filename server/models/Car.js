var mongoose = require('mongoose');

var CarSchema = {
	brand:String,
	model:String,
	purchased:Boolean,
	id:String
};

var car = mongoose.model('Car', CarSchema, "cars");

module.exports = car;
