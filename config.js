var path = require('path');

exports.mongodb_url = 'mongodb://localhost/freelancer';
exports.production = process.env.NODE_ENV == 'production';

// Path Stuff
exports.publicPath = path.join(__dirname, 'public');
exports.viewsPath = path.join(__dirname, 'views');