var mongoose = require('mongoose');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var scheme = schema({
	date_upated: Date,
	file_id: String,
	description: String,
	price: Number,
	money_held: Number,
	status: String
});

exports.Milestone = mongoose.model("Milestone", scheme);