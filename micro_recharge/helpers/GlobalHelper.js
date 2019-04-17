const Recharge = require('../model/Recharge');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Hashids = require('hashids');

exports.generateRechargeCode = function() {
	return new Promise((resolve, reject) => {
		Recharge.Recharge
			.findAll({
				attributes: [ [ Sequelize.fn('max', Sequelize.col('id')), 'id' ] ],
				raw: true
			})
			.then((rows) => resolve('REINV00' + rows[0].id))
			.catch((err) => reject(err));
	});
};

exports.decryptParameter = function(req) {
	return new Promise((resolve, reject) => {
		const hashids = new Hashids('TicketDesk', 8, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');

		let res = hashids.decode(req);

		resolve(res[0]);
		reject('Error');
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
