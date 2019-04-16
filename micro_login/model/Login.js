const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Member = sequelize.define(
	'member',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		status_id: {
			type: Sequelize.INTEGER
		},
		balance: {
			type: Sequelize.INTEGER
		},
		username: {
			type: Sequelize.STRING(255)
		},
		password: {
			type: Sequelize.STRING(255)
		},
		email: {
			type: Sequelize.STRING(255)
		},
		profile_image: {
			type: Sequelize.STRING(255)
		},
		is_on: {
			type: Sequelize.INTEGER
		},
		last_login_browser: {
			type: Sequelize.STRING(255)
		},
		last_login_ip: {
			type: Sequelize.STRING(255)
		},
		last_login_os: {
			type: Sequelize.STRING(255)
		},
		last_login_at: {
			type: Sequelize.STRING(255)
		},
		verify_at: {
			type: Sequelize.STRING(255)
		},
		expired_at: {
			type: Sequelize.STRING(255)
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

module.exports = {
	Member: Member
};
