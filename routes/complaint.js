let express = require('express'),
	complaint = require('../controllers/complaint');
	
let router = express.Router();

router.post('/', complaint.create);

router.get('/', complaint.list);

// router.get('/:complaintId', serviceComplaint.complaintById);

// router.put('/:complaintId', serviceComplaint.update);

// router.delete('/:complaintId', serviceComplaint.delete);

module.exports = router;
