const jwt = require('jsonwebtoken');

exports.JWTverify = function(req, res, next) {
	const bearerHeader = req.headers['authorization'];
	const token = bearerHeader ? bearerHeader.split(' ')[1] : undefined;
	if (token) {
		jwt.verify(token, process.env.JWT_KEY, function(err, payload) {
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
