let Complaint = require('mongoose').model('Complaint');

let obj = {
	create: function (req, res, next) {
		let complaint = new Complaint(req.body);

		// TODO: strip ip & date

		complaint.save(function (err) {
			if (err) {
				res.status(400).send({
					message: 'Can\'t create complaint: ' + err
				});
			} else {
				res.json(complaint);
			}
		});
	},

	list: function (req, res, next) {
		Complaint
			.find({})
			.limit(3)
			.sort({addedDate: 'desc'})
			.select('type problemShort problemFull')
			.exec(function (err, complaints) {
				if (err) {
					res.status(400).send({
						message: 'Can\'t list complaints: ' + err
					});
				} else {
					res.json(complaints);
				}
			});
	},

	read: function (req, res, next) {
		let id = req.params.complaintId;

		Complaint.findOne(
			{_id: id},
			'-ip', // addedDate need for nested queries
			{
				limit: 3
			},
			function (err, complaint) {
				let country = require('../controllers/country');
				let async = require('async');

				if (err) {
					res.status(400).send({
						message: 'Can\'t get complaint ' + id + ': ' + err
					});
				} else {
					// We can't assign custom properties to Mongoose schema
					// so we will copy it
					var complaint = JSON.parse(JSON.stringify(complaint));

					// Find country name by country code
					complaint.countryName = [];
					for (var i = 0; i < complaint.country.length; i++) {
						complaint.countryName.push(country.getCountryName(complaint.country[i]));
					}

					// Find previous and next complaints ids
					async.parallel([
							obj._previous.bind(null, complaint.addedDate),
							obj._next.bind(null, complaint.addedDate)
						], function(err, results) {
						complaint.previous = results[0];
						complaint.next = results[1];

						res.json(complaint);
					});
				}
			}
		)
	},

	// TODO:
	update: function (req, res, next) {
		let id = req.params.complaintId;

		ServiceComplaint.findByIdAndUpdate(id, req.body, function (err, complaint) {
			if (err) {
				res.status(400).send({
					message: 'Can\'t update complaint ' + id + ': ' + err
				});
			} else {
				res.json(complaint);
			}
		});
	},

	// TODO:
	delete: function (req, res, next) {
		let id = req.params.complaintId;

		ServiceComplaint.findByIdAndRemove(id, {}, function (err, complaint) {
			if (err) {
				res.status(400).send({
					message: 'Can\'t delete complaint ' + id + ': ' + err
				});
			} else {
				res.json(complaint);
			}
		});
	},

	// Find previous post id
	_previous: function (addedDate, callback) {
		Complaint
			.findOne({addedDate: {'$lt': addedDate}}) 
			.limit(1)
			.sort({addedDate: 'desc'})
			.select('_id')
			.exec(function (err, complaint) {
				if (err) {
					return callback(err);
				}
				callback(null, complaint ? complaint._id : '');
			});
	},

	// Find next post id
	_next: function (addedDate, callback) {
		Complaint
			.findOne({addedDate: {'$gt': addedDate}}) 
			.limit(1)
			.sort({addedDate: 'asc'})
			.select('_id')
			.exec(function (err, complaint) {
				if (err) {
					return callback(err);
				}
				callback(null, complaint ? complaint._id : '');
			});
	}
};

module.exports = obj;