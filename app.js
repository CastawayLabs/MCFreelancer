var   express = require('express'),
      path = require('path'),
      favicon = require('static-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      routes = require('./routes'),
      //models = require('./models'),
      passport = require('passport');

var app = express();

//Routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

// less support on the fly
app.use(require('less-middleware')(path.join(__dirname, 'public', 'less'),{
  // display debug info if in dev mode
  debug: app.get('env') === 'development' ? true : false,
  dest: path.join(__dirname, 'public'),
  force: app.get('env') === 'development' ? true : false,
  once: app.get('env') === 'production' ? true : false,
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
}));

mongoose.connect('mongodb://localhost/freelancer');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
