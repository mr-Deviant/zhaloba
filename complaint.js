// Installing MongoDB http://www.pronique.com/blog/installing-mongodb-on-windows-the-wamp-way
// Start MongoDB `mongod --dbpath=C:/Program Files/MongoDB/bin/mongod.exe`
let mongoose = require('mongoose'),
	ip = require('ip');

let ComplaintSchema = new mongoose.Schema({
	company: [String],
	site: [String],
	name: [String],
	surname: [String],
	patronymic: [String],
	country: [String],
	city: [String],
	phone: [String],
	problemShort: {type: String, required: true},
	problemFull: {type: String, required: true},
	addedDate: {type: Date, default: Date.now},
	ip: {type: String, default: ip.address()}
});

ComplaintSchema.statics.add = function (req, res) {
	var complaint = new this(req.body);
	complaint.save(function (err) {
		let result = {success: true};
		if (err)  {
			result.success = false;
			result.message = 'Could\'nt add complaint: ' + err;
		}
		res.json(result);
	});
};

module.exports = mongoose.model('Complaint', ComplaintSchema); // Compile schema
