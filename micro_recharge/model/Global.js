const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const PaymentType = sequelize.define(
	'payment_type',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.TEXT
		},
		description: {
			type: Sequelize.TEXT
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

const PaymentMethod = sequelize.define(
	'payment_method',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		code: {
			type: Sequelize.TEXT
		},
		site: {
			type: Sequelize.TEXT
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

module.exports = {
	PaymentType: PaymentType,
	PaymentMethod: PaymentMethod
};
