var scheme = schema({
	name: String,
	date: Date,
	description: String,
	tags: [String],
	freelancer: String,
	users: [{
		type: ObjectId,
		ref: 'User'
	}],
	contract: {
		description: String,
		approved: String
	},
	messages: [{
		type: ObjectId,
		ref: 'Message'
	}],
	quotes: [{
		type: ObjectId,
		ref: 'ProjectQuote'
	}],
	notifications: Number,
	last_checked: Number,
	milestones: [{
		type: ObjectId,
		ref: 'Milestone'
	}],
	files: [{
		url: String
	}],
	delete_date: Date,
	reported: String,
	report_message: String
});