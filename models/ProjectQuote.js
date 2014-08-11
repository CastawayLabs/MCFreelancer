var mongoose = require('mongoose');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var scheme = schema({
	project: {
		type: ObjectId,
		ref: 'Project'
	},
	price: Number,
	eta: String,
	quote_message: String,
	messages: [{
		type: ObjectId,
		ref: 'Message'
	}]
});

exports.ProjectQuote = mongoose.model("ProjectQuote", scheme);