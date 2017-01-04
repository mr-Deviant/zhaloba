let express = require('express'),
	search = require('../controllers/search');
	
let router = express.Router();

router.get('/', search.list);

module.exports = router;