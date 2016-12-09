// Installing MongoDB http://www.pronique.com/blog/installing-mongodb-on-windows-the-wamp-way
// Start MongoDB `mongod --dbpath=C:/Program Files/MongoDB/bin/mongod.exe`
//show dbs // show all tables
//use complaint // switch to table
//show collections // show schemas
//var schematodo = db.tasks.findOne();
// for (var key in schematodo) { print (key) ;

let mongoose = require('mongoose'),
	ip = require('ip');

let ComplaintSchema = new mongoose.Schema({
	type: {type: [String], enum: [1, 2], required: true},

	company: {type: [String], default: '', trim: true},
	site: {type: [String], default: '', trim: true},
	name: {type: [String], default: '', trim: true},
	surname: {type: [String], default: '', trim: true},
	patronymic: {type: [String], default: '', trim: true},
	country: {type: [String], default: '', trim: true},
	city: {type: [String], default: '', trim: true},
	phone: {type: [String], default: '', trim: true},

	productName: {type: String, default: '', trim: true}, // TODO: Need custom validator
	barcode: {type: String, default: '', trim: true},

	problemShort: {type: String, required: true, trim: true},
	problemFull: {type: String, required: true, trim: true},

	addedDate: {type: Date, default: Date.now},
	ip: {type: String, default: ip.address()}
});

module.exports = mongoose.model('Complaint', ComplaintSchema); // Compile schema
