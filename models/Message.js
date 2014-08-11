var mongoose = require('mongoose');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var scheme = schema({
	sent: {
		type: Date,
		default: Date.now
	},
	message: String,
	user: {
		type: ObjectId,
		ref: 'User'
	}
});

exports.Message = mongoose.model("Message", scheme);