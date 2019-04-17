const express = require('express');
const router = express.Router();
const Recharges = require('../controller/Recharges');
const RechargeJWT = require('../JWTauth/RechargeJWT');
const RechargeValidator = require('../validator/RechargeValidator');

router.get('/', Recharges.index);
router.post(
	'/processGetServicePulsa/',
	RechargeJWT.JWTverify,
	RechargeValidator.processGetServicePulsaValidation,
	Recharges.processGetServicePulsa
);
router.post(
	'/processGetServiceVoucher/',
	RechargeJWT.JWTverify,
	RechargeValidator.processGetServiceVoucherValidation,
	Recharges.processGetServiceVoucher
);
router.post(
	'/processGetServiceGame/',
	RechargeJWT.JWTverify,
	RechargeValidator.processGetServiceGameValidation,
	Recharges.processGetServiceGame
);
router.post(
	'/processGetServiceElectricMoney/',
	RechargeJWT.JWTverify,
	RechargeValidator.processGetServiceMoneyValidation,
	Recharges.processGetServiceElectricMoney
);
router.post(
	'/processGetServiceElectricity/',
	RechargeJWT.JWTverify,
	RechargeValidator.processGetServiceElectricityValidation,
	Recharges.processGetServiceElectricity
);

router.post(
	'/processRechargePulsa/',
	RechargeJWT.JWTverify,
	RechargeValidator.processRechargePulsaValidation,
	Recharges.processRechargePulsa
);
router.post(
	'/processRechargeVoucher/',
	RechargeJWT.JWTverify,
	RechargeValidator.processRechargePulsaValidation,
	Recharges.processRechargeVoucher
);
router.post(
	'/processRechargeGame/',
	RechargeJWT.JWTverify,
	RechargeValidator.processRechargePulsaValidation,
	Recharges.processRechargeGame
);
router.post(
	'/processRechargeElectricMoney/',
	RechargeJWT.JWTverify,
	RechargeValidator.processRechargePulsaValidation,
	Recharges.processRechargeElectricMoney
);
router.post(
	'/processRechargeElectricity/',
	RechargeJWT.JWTverify,
	RechargeValidator.processRechargePulsaValidation,
	Recharges.processRechargeElectricity
);

router.get('/processGetInfoOrder/', RechargeJWT.JWTverify, Recharges.processGetInfoOrder);
router.get('/thank_you/', RechargeJWT.JWTverify, Recharges.thank_you);

module.exports = router;
