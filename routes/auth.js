var express = require('express');
var router = express.Router();

var models = require('../models');

var passport = require('passport');

// Passport modules
var passport_github = require('passport-github')
	, passport_google = require('passport-google');

passport.use(new passport_google.Strategy({
	realm: 'http://mcfreelancer.com',
	returnURL: 'http://mcfreelancer.com/auth/google/callback'
}, function(identifier, profile, done) {
	models.User.findOne({
		google_id: identifier
	}).exec(done);
}));

passport.use(new passport_github.Strategy({
	clientID: 'a',
	clientSecret: 'b',
	callbackURL: 'http://mcfreelancer.com/auth/github/callback'
}, function (accessToken, refreshToken, profile, done) {
	models.User.findOne({
		github_id: profile.id
	}).exec(done);
}))

passport.serializeUser(function(user, done) {
  done(null, user.nameID);
});

passport.deserializeUser(function(id, done) {
	var user = users[id];
	if (!user) {
		return done(new Error("User does not exist"));
	}

	done(null, user);
});

router.get('/google', passport.authenticate('google'));
router.get('/google/callback', passport.authenticate('google', {
	successRedirect: '/',
	failureRedirect: '/'
}));

router.get('/github', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github', {
	successRedirect: '/',
	failureRedirect: '/'
}));

exports.router = router;