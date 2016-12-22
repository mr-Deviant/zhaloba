let express = require('express'),
	complaint = require('../controllers/complaint'),
	user = require('../controllers/user');
	
let router = express.Router();

router.post('/', complaint.create);

router.get('/', complaint.list);

router.get('/:complaintId', complaint.read);

router.put('/:complaintId', user.isAdmin, complaint.update);

router.delete('/:complaintId', user.isAdmin, complaint.delete);

module.exports = router;
