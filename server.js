var express = require('express'),
	mongoose = require('mongoose'),
	// path = require('path'),
	// favicon = require('serve-favicon'),
	// logger = require('morgan'),
	// cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');
	cors = require('cors'),
	complaint = require('./api/routes/complaint'),
	country = require('./api/routes/country');

var app = express(),
	db = mongoose.connection;

// View engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); // TODO: create such folder on production
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

// Connect to DB (local connection)
mongoose.connect('mongodb://localhost/ComplaintDB');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to Mongoose');
});

// module.exports = app;

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});














