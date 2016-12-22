var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	var country = require('../controllers/country');
	var result = country.getAll();
	res.json(result);
});

router.get('/by-ip', function (req, res) {
	var country = require('../controllers/country');
	var result = country.getByIp(req);
	res.json(result);
});

module.exports = router;
