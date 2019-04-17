const Recharge = require('../model/Recharge');
const GlobalLibrary = require('../libraries/GlobalLibrary');
const GlobalHelper = require('../helpers/GlobalHelper');
const QueryHelper = require('../helpers/QueryHelper');

module.exports = {
	index: function(req, res) {
		res.send(Recharge.tes);
	},

	processGetRechargeDetail: async function(req, res) {
		let order = await QueryHelper.getDataOrder(req.query);
		let data = [ order ];
		res.status(200).json({
			rc: 200,
			result: true,
			message: 'Success Retrive.',
			data: data
		});
	},

	processRechargeSynchronize: async function(req, res) {
		res.send('masok');
	}
};
