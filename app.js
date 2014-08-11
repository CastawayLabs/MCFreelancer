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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());

// Routes
app.use(routes.router);

// less support on the fly
// this is *a bit* messy
app.use(lessMiddleware(config.publicPath, 'less'), {
  // display debug info if in dev mode
  debug: config.production ? false : true,
  dest: path.join(__dirname, 'public'),
  force: config.production ? false : true,
  once: config.production ? true : false,
  // see: http://git.io/x_5jrw
  preprocess: {
    path: function (pathname) {
      if (path.sep === '\\') {
        return pathname.replace('\\css\\', '\\');
      } else {
        return pathname.replace('/css/', '/');
      }
    }
  }
});

// Static stuff
app.use(express.static(config.publicPath));

// 404/500 etc
app.use(routesHandlers.router);

module.exports = app;
