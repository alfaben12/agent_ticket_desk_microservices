const Login = require('../model/Login');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Hashids = require('hashids');

exports.getMember = function(req, res) {
	return new Promise((resolve, reject) => {
		Login.Member
			.findOne({
				where: {
					email: req.body.txt_email,
					password: req.body.txt_password
				},
				raw: true
			})
			.then((rows) => resolve(rows))
			.catch((err) => reject(err));
	});
};

exports.encryptParameter = function(req) {
	return new Promise((resolve, reject) => {
		const hashids = new Hashids('TicketDesk', 8, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');

		let res = hashids.encode(req); // o2fXhV

		resolve(res);
		reject('Error');
	});
};
