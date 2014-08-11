var scheme = schema({
	sent: Date,
	message: String,
	user: {
		type: ObjectId,
		ref: 'User'
	}
});