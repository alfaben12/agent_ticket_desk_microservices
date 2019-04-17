const jwt = require('jsonwebtoken');
const moment = require('moment');
const dotenv = require('dotenv');
dotenv.config();

exports.JWTsign = function(param) {
	return new Promise((resolve, reject) => {
		jwt.sign(
			{
				member_id: param,
				generate_at: moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
			},
			process.env.JWT_KEY,
			function(err, token) {
				resolve(token);
				reject('Error');
			}
		);
	});
};
