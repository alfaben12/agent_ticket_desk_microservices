const Login = require('../model/Login');
const GlobalHelper = require('../helpers/GlobalHelper');
const LoginJWT = require('../JWTauth/LoginJWT');
const moment = require('moment');

module.exports = {
	index: function(req, res) {
		console.log('index');
	},

	processLogin: async function(req, res) {
		let member = await GlobalHelper.getAgent(req, res);
		let encrypt;
		let token;
		if (member != null) {
			encrypt = await GlobalHelper.encryptParameter(member.id);
			token = await LoginJWT.JWTsign(encrypt);

			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Server berhasil generate token.',
				data: {
					token: token,
					information: {
						account: member
					},
					generate_at: {
						datetime: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
						date: moment().format('YYYY-MM-DD')
					}
				}
			});
		} else {
			res.status(400).json({
				rc: 400,
				result: false,
				message: 'Server gagal generate token.'
			});
		}
	}
};
