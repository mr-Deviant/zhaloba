var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
	var Complaint = require('../complaint');
	Complaint.add(req, res);
});

module.exports = router;
