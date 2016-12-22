module.exports = {
	// Check is user logged in and administrator
	// NOT implemented yet, access denied for all
	isAdmin: function (req, res, next) {
		if (1) {
			return res.status(401).send({
				message: 'User is not logged in'
			});
		}

		next();
	}
}