var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');
	cors = require('cors');
var app = express(),
	db = mongoose.connection;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/app')); // TOFO: create such folder on production

// Connect to DB (local connection)
mongoose.connect('mongodb://localhost/ComplaintDB');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to Mongoose');
});


app.use(cors());

app.get('/country', function (req, res) {
	var country = require('./api/country');
	var result = country.getAll();
	res.json(result);
});

app.get('/country/by-ip', function (req, res) {
	var country = require('./api/country');
	var result = country.getByIp(req);
	res.json(result);
});

app.post('/complaint', function (req, res) {
	var Complaint = require('./api/complaint');
	Complaint.add(req, res);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});
