const Login = require('../model/Login');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Hashids = require('hashids');

exports.getAgent = function(req, res) {
	return new Promise((resolve, reject) => {
		Login.Agent
			.findOne({
				where: {
					username: req.body.txt_username,
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
