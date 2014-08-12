var   express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes = require('./routes'),
      routesHandlers = require('./routes/handlers'),
      models = require('./models'),
      passport = require('passport'),
      config = require('./config'),
      lessMiddleware = require('less-middleware');

mongoose.connect(config.mongodb_url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  console.log('Connection to MongoDB Established');
});

var app = express();

// view engine setup
app.set('views', config.viewsPath);
app.set('view engine', 'jade');

// Middleware
app.use(logger(config.production ? 'default' : 'dev'));
app.use(lessMiddleware(path.join(__dirname, 'public', 'less'),{
  debug: app.get('env') === 'development' ? true : false,
  force: app.get('env') === 'development' ? true : false,
  once: app.get('env') === 'production' ? true : false,
  dest: path.join(__dirname, 'public'),
  preprocess: {
    path: function (pathname) {
      if (path.sep === '\\') {
        return pathname.replace('\\css\\', '\\');
      } else {
        return pathname.replace('/css/', '/');
      }
    }
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());

// Routes
app.use(routes.router);

// Static stuff
app.use(express.static(config.publicPath));

// 404/500 etc
app.use(routesHandlers.router);

module.exports = app;
