const express = require('express');
const router = express.Router();
const Recharges = require('../controller/Recharges');
const RechargeJWT = require('../JWTauth/RechargeJWT');
const RechargeValidator = require('../validator/RechargeValidator');

router.get('/', Recharges.index);
router.get(
	'/processGetRechargeDetail/',
	RechargeJWT.JWTverify,
	RechargeValidator.processGetRechargeDetailValidation,
	Recharges.processGetRechargeDetail
);

router.put('/processRechargeSynchronize/', RechargeJWT.JWTverify, Recharges.processRechargeSynchronize);

module.exports = router;
