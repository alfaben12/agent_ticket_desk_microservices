const jwt = require('jsonwebtoken');

exports.JWTverify = function(req, res, next) {
	const bearerHeader = req.headers['authorization'];
	const token = bearerHeader;
	if (token) {
		jwt.verify(token, 'TicketDesk', function(err, payload) {
			if (err) {
				res.json({
					result: false,
					message: 'Invalid Signature.'
				});
			} else {
				req.payload = payload;
				next();
			}
		});
	} else {
		res.json({
			result: false,
			message: 'Invalid Signature.'
		});
	}
};
