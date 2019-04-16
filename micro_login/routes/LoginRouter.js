const express = require('express');
const router = express.Router();
const Logins = require('../controller/Logins');
const LoginJWT = require('../JWTauth/LoginJWT');
const LoginValidator = require('../validator/LoginValidator');

router.get('/', Logins.index);
router.post('/processLogin/', LoginValidator.processLoginValidation, Logins.processLogin);
module.exports = router;
