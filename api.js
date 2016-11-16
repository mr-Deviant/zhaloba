var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/countryByIp', function (req, res) {
	var geoip = require('geoip-lite');

	var ip = '93.126.83.249', // TODO: use req.ip instead
		geo = geoip.lookup(ip),
		result = {country: geo ? geo.country : ''};

	res.json(result);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
