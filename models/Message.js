var mongoose = require('mongoose');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var scheme = schema({
	sent: Date,
	message: String,
	user: {
		type: ObjectId,
		ref: 'User'
	}
});

exports.Message = mongoose.model("Message", scheme);