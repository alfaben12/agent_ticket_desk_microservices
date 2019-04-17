const Recharge = require('../model/Recharge');
const GlobalLibrary = require('../libraries/GlobalLibrary');
const GlobalHelper = require('../helpers/GlobalHelper');
const QueryHelper = require('../helpers/QueryHelper');

module.exports = {
	index: function(req, res) {
		res.send(Recharge.tes);
	},

	processGetServicePulsa: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let phoneNumber = req.body.phoneNumber;

		let data = GlobalLibrary.glRechargeProduct('pulsa', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processGetServiceVoucher: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let nominal = req.body.nominal;

		let data = GlobalLibrary.glRechargeProduct('voucher', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processGetServiceGame: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let nominal = req.body.nominal;

		let data = GlobalLibrary.glRechargeProduct('game', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processGetServiceElectricMoney: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let nominal = req.body.nominal;

		let data = GlobalLibrary.glRechargeProduct('etoll', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processGetServiceElectricity: function(req, res) {
		let operator = req.body.operator;
		let status = req.body.status;
		let nominal = req.body.nominal;

		let data = GlobalLibrary.glRechargeProduct('pln', status, operator).then(function(rows) {
			if (rows.length > 0) {
				res.json({
					rc: 200,
					message: 'Server berhasil memroses permintaan.',
					data: rows
				});
			} else {
				res.json({
					rc: 204,
					message: 'Server berhasil memroses permintaan, tetapi tidak menampilkan konten apa pun.',
					data: rows
				});
			}
		});
	},

	processRechargePulsa: async function(req, res) {
		let orderId;
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 1;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(async function(result) {
			orderId = await GlobalHelper.encryptParameter(result.id);
			productId = await GlobalHelper.encryptParameter(result.recharge_product_id);

			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.',
				redirect: 'recharges/confirm?orid=' + orderId + '&prid=' + productId + '&pnum=' + target
			});
		});
	},

	processRechargeVoucher: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 2;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processRechargeGame: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 3;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processRechargeElectricMoney: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 4;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processRechargeElectricity: async function(req, res) {
		let productId = req.body.product_id;
		let target = req.body.phoneNumber;
		let memberId = await GlobalHelper.decryptParameter(req.payload.member_id);
		let rechargeTypeId = 5;
		let rechargeCode = await GlobalHelper.generateRechargeCode();
		let rechargeStatusId = 1;

		let value = {
			recharge_product_id: productId,
			member_id: memberId,
			recharge_type_id: rechargeTypeId,
			recharge_code: rechargeCode,
			target: target,
			recharge_status_id: rechargeStatusId
		};
		Recharge.Recharge.create(value).then(function(result) {
			res.status(201).json({
				rc: 201,
				result: true,
				message: 'Success Retrive.'
			});
		});
	},

	processAddRechargeDetailPulsa: async function(req, res) {},

	processAddRechargeDetailVoucher: async function(req, res) {},

	processAddRechargeDetailGame: async function(req, res) {},

	processAddRechargeDetailElectricMoney: async function(req, res) {},

	processAddRechargeDetailElectricity: async function(req, res) {},

	processGetFilterServicePulsa: async function(req, res) {},

	processGetFilterServiceVoucher: async function(req, res) {},

	processGetFilterServiceGame: async function(req, res) {},

	processGetFilterServiceElectricMoney: async function(req, res) {},

	processGetFilterServiceElectricity: async function(req, res) {},

	processGetInfoOrder: async function(req, res) {
		let order = await QueryHelper.getDataOrder(req.query);
		let data = [ order ];
		res.status(200).json({
			rc: 200,
			result: true,
			message: 'Success Retrive.',
			data: data
		});
	},

	thank_you: async function(req, res) {
		let order = await QueryHelper.getCompleteOrderData(req.query);
		let data = [ order ];
		res.status(200).json({
			rc: 200,
			result: true,
			message: 'Success Retrive.',
			data: data
		});
	}
};
