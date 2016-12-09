let Complaint = require('mongoose').model('Complaint');

module.exports = {
	create: function (req, res, next) {
		let complaint = new Complaint(req.body);

		// TODO: strip ip & date

		complaint.save(function (err) {
			if (err) {
				res.json({
					success: false,
					error: 'Couldn\'t add complaint: ' + err
				});
			} else {
				res.json({
					success: true
				});
			}
		});
	},

	list: function (req, res, next) {
		Complaint
			.find({})
			.limit(3)
			.sort({date: -1})
			.exec(function (err, complaints) {
				let result = {success: true};

				if (err) {
					result.success = false;
					result.error = 'Couldn\'t get mixed complaints: ' + err;
				} else {
					result.data = complaints;
				}

				res.json(result);
			});
	}/*,
// TODO: make function useful for internal use, not only for api
	list: function (req, res, next) {
		ServiceComplaint.find(
			{},
			'-addedDate -ip',
			{
				limit: 3
			},
			function (err, complaints) {
				let result = {success: true};

				if (err) {
					result.success = false;
					result.error = 'Could\'nt get complaints: ' + err;
				} else {
					result.data = complaints;
				}

				res.json(result);
			}
		)
	},

	complaintById: function (req, res, next) {
		let id = req.params.complaintId;

		ServiceComplaint.findOne(
			{_id: id},
			'-addedDate -ip',
			{
				limit: 3
			},
			function (err, complaint) {
				let result = {success: true};

				if (err) {
					result.success = false;
					result.error = 'Could\'nt get complaint ' + id + ': ' + err;
				} else {
					result.data = complaint;
				}

				res.json(result);
			}
		)
	},

	update: function (req, res, next) {
		let id = req.params.complaintId;

		ServiceComplaint.findByIdAndUpdate(id, req.body, function (err, complaint) {
			let result = {success: true};

			if (err) {
				result.success = false;
				result.error = 'Could\'nt update complaint ' + id + ': ' + err;
			} else {
				result.data = complaint;
			}

			res.json(result);
		});
	},

	delete: function (req, res, next) {
		let id = req.params.complaintId;

		ServiceComplaint.findByIdAndRemove(id, {}, function (err, complaint) {
			let result = {success: true};

			if (err) {
				result.success = false;
				result.error = 'Could\'nt delete complaint ' + id + ': ' + err;
			} else {
				result.data = complaint;
			}

			res.json(result);
		});
	}*/
}