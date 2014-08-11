var mongoose = require('mongoose');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

/*
 * Project Milestone
 */

var scheme = schema({
	created: {
		type: Date,
		default: Date.now
	},
	project: {
		type: ObjectId,
		ref: 'Project'
	},
	date_updated: Date,
	file_id: String,
	description: String,
	price: Number,
	money_held: Number,
	status: String
});

exports.Milestone = mongoose.model("Milestone", scheme);