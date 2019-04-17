const Recharge = require('../model/Recharge');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const md5 = require('md5');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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

exports.glRechargeSupplier = async function() {
	return new Promise((resolve, reject) => {
		var path = 'https://testprepaid.mobilepulsa.net/v1/legacy/index';
		var usernameTxt = '085606330792';
		var passwordTxt = '4595c6c08c37d702';
		var refIdTxt = 'SBLUCLE6';
		var signTxt = md5(usernameTxt + passwordTxt + refIdTxt);

		let data;
		var doc =
			`{
			"commands"   : "inquiry",
			"username"   : "085606330792",
			"ref_id"     : "` +
			refIdTxt +
			`",
			"sign"       : "` +
			signTxt +
			`"
		}`;

		var xhr = new XMLHttpRequest();
		xhr.open('POST', path, true);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		xhr.onload = function() {
			if (xhr.readyState == 4 && xhr.status == '200') {
				resolve(xhr.responseText);
			} else {
				reject('Error');
			}
		};
		xhr.send(doc);
	});
};
