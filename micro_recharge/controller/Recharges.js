const Recharge = require('../model/Recharge');
const GlobalLibrary = require('../libraries/GlobalLibrary');
const GlobalHelper = require('../helpers/GlobalHelper');
const QueryHelper = require('../helpers/QueryHelper');

module.exports = {
	index: function(req, res) {
		res.send(Recharge.tes);
	},

	processGetRechargeDetail: function(req, res) {
		res.send('masok');
	}
};
