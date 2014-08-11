var mongoose = require('mongoose')
	, https = require('https')
	, async = require('async');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var scheme = schema({
	name: String,
	email: String,
	password: String,
	description: String,
	rating: Number,
	notifications: Number,
	freelancer: String,
	payout_email: String,
	admin: Boolean,
	banned: Boolean
});

exports.User = mongoose.model("User", scheme);