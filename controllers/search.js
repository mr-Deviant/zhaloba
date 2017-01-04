let escapeStringRegexp = require('escape-string-regexp');
let Complaint = require('mongoose').model('Complaint');

module.exports = {
	list: function (req, res, next) {
		let search = new RegExp(
			// Make string regexp safe
			escapeStringRegexp(req.query.search)
				.trim()
				// Replace multiple spaces with single one
				.replace(/\s\s+/g, ' ')
				// Make search by words (not phrases), so instead of space insert or operator
				.replace(/ /g, '|'),
		'gi');

		Complaint
			.find({$or:[
				{'company': search},
				{'site': search},
				{'surname': search},
				{'name': search},
				{'patronymic': search},
				{'address': search},
				{'phone': search},
				{'bankCard': search},
				{'productName': search},
				{'barcode': search},
				{'problemShort': search},
				{'problemFull': search}
			]})
			//.limit(10)
			//.sort({addedDate: 'desc'})
			.select('-ip')
			.exec(function (err, complaints) {
				if (err) {
					res.status(400).send({
						message: 'Can\'t list complaints: ' + err
					});
				} else {
					// Find country name by country code
					let country = require('../controllers/country');

					var complaints = JSON.parse(JSON.stringify(complaints));

					for (var i = 0; i < complaints.length; i++) {
						complaints[i].countryName = [];

						for (var j = 0; j < complaints[i].country.length; j++) {
							complaints[i].countryName.push(country.getCountryName(complaints[i].country[j]));
						}
					}

					res.json(complaints);
				}
			});
	},
};
