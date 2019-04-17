const Recharge = require('../model/Recharge');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.glRechargeProduct = function(type = 'pulsa', status = 'active', operator = '') {
	let whereSetup = {};
	let orderSetup = {};
	if (type == 'pulsa') {
		whereSetup = {
			supp_type: {
				[Op.or]: [ type, 'data' ]
			},
			supp_op: {
				[Op.or]: [ operator, operator + ' Paket Internet' ]
			}
		};
		orderSetup = [ [ 'supp_op', 'ASC' ], [ 'supp_price', 'ASC' ] ];
	} else if (type == 'pln') {
		whereSetup = {
			supp_type: {
				[Op.or]: [ type, 'plnl' ]
			},
			supp_op: operator
		};
		orderSetup = [ [ 'supp_type', 'ASC' ], [ 'supp_price', 'ASC' ] ];
	} else {
		whereSetup = {
			supp_type: type,
			supp_op: operator
		};
		orderSetup = [ [ 'supp_op', 'ASC' ], [ 'supp_price', 'ASC' ] ];
	}

	return Recharge.RechargeProduct.findAll({
		where: whereSetup,
		order: orderSetup
	});
};
