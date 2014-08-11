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