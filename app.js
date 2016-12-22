process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express'),
	mongoose = require('./config/mongoose'),
	db = mongoose(), // Should be defined before routes
	path = require('path'),
	// favicon = require('serve-favicon'),
	// logger = require('morgan'),
	// cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');
	cors = require('cors'),
	app = express(),
	complaint = require('./routes/complaint'),
	country = require('./routes/country');

// View engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/complaint', complaint);
app.use('/country', country);


// Catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// Error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

module.exports = app;

// TODO: list here all express properties (for future)
