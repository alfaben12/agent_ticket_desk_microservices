const { check, validationResult } = require('express-validator/check');

exports.processGetRechargeDetailValidation = function(req, res, next) {
	req.checkQuery('rechargeID', 'Recharge is required').notEmpty();
	req.checkQuery('productID', 'Product is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};
