var mongoose = require('mongoose');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

/*
 * Project Member
 * A User, but belongs to a single project..
 */

var scheme = schema({
	joined: {
		type: Date,
		default: Date.now
	},
	project: {
		type: ObjectId,
		ref: 'Project'
	},
	user: {
		type: ObjectId,
		ref: 'User'
	},
	admin: {
		type: Boolean,
		default: false
	}
});

exports.ProjectMember = mongoose.model("ProjectMember", scheme);