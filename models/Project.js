var mongoose = require('mongoose');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var scheme = schema({
	name: String,
	created: {
		type: Date,
		default: Date.now
	},
	description: String,
	tags: [String],
	freelancer: String,
	contract: {
		description: String,
		approved: String
	},
	// maybe should be an array or a foreign table of notifications..
	notifications: Number,
	last_checked: Number,
	files: [{
		created: {
			type: Date,
			default: Date.now
		},
		url: String
	}],
	deleted_date: Date,
	deleted: {
		type: Boolean,
		default: false
	},
	reported: String,
	report_message: String,
	messages: [{
		type: ObjectId,
		ref: 'Message'
	}]
});

exports.Project = mongoose.model("Project", scheme);