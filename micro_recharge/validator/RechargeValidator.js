const { check, validationResult } = require('express-validator/check');

exports.processGetServicePulsaValidation = function(req, res, next) {
	req.checkBody('operator', 'Operator is required').notEmpty();
	req.checkBody('phoneNumber', 'Phone Number is required').notEmpty();
	req.checkBody('status', 'Status is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};

exports.processGetServiceVoucherValidation = function(req, res, next) {
	req.checkBody('operator', 'Operator is required').notEmpty();
	req.checkBody('phoneNumber', 'Phone Number is required').notEmpty();
	req.checkBody('status', 'Status is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};

exports.processGetServiceGameValidation = function(req, res, next) {
	req.checkBody('operator', 'Operator is required').notEmpty();
	req.checkBody('phoneNumber', 'Phone Number is required').notEmpty();
	req.checkBody('status', 'Status is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};

exports.processGetServiceMoneyValidation = function(req, res, next) {
	req.checkBody('operator', 'Operator is required').notEmpty();
	req.checkBody('phoneNumber', 'Phone Number is required').notEmpty();
	req.checkBody('status', 'Status is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};

exports.processGetServiceElectricityValidation = function(req, res, next) {
	req.checkBody('operator', 'Operator is required').notEmpty();
	req.checkBody('phoneNumber', 'Phone Number is required').notEmpty();
	req.checkBody('status', 'Status is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};

exports.processRechargePulsaValidation = function(req, res, next) {
	req.checkBody('phoneNumber', 'Phone Number is required').notEmpty();

	let errors = req.validationErrors();
	if (errors) {
		res.json(errors);
	} else {
		next();
	}
};
