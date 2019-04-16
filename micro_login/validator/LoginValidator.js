const { check, validationResult } = require('express-validator/check');

exports.processLoginValidation = function(req, res, next) {
	req.checkBody('txt_username', 'Username is required').notEmpty();
	req.checkBody('txt_password', 'Password is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};
