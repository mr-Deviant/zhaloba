var express = require('express'),
	cors = require('cors');
var app = express();

app.use(express.static(__dirname + '/dist'));

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

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});
