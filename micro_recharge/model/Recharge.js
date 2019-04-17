const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Global = require('./Global');

const Recharge = sequelize.define(
	'recharge',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		recharge_product_id: {
			type: Sequelize.INTEGER
		},
		recharge_type_id: {
			type: Sequelize.INTEGER
		},
		recharge_status_id: {
			type: Sequelize.INTEGER
		},
		member_id: {
			type: Sequelize.INTEGER
		},
		recharge_code: {
			type: Sequelize.STRING(255)
		},
		target: {
			type: Sequelize.STRING(255)
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

const RechargeDetail = sequelize.define(
	'recharge_detail',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		recharge_id: {
			type: Sequelize.INTEGER
		},
		member_id: {
			type: Sequelize.INTEGER
		},
		promo_code_id: {
			type: Sequelize.INTEGER
		},
		total_cost: {
			type: Sequelize.INTEGER
		},
		total_reduction: {
			type: Sequelize.INTEGER
		},
		total_tax: {
			type: Sequelize.INTEGER
		},
		final_cost: {
			type: Sequelize.INTEGER
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

const RechargePayment = sequelize.define(
	'recharge_payment',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		recharge_id: {
			type: Sequelize.INTEGER
		},
		recharge_payment_status_id: {
			type: Sequelize.INTEGER
		},
		payment_type_id: {
			type: Sequelize.INTEGER
		},
		total_cost: {
			type: Sequelize.STRING(255)
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

const RechargePaymentStatus = sequelize.define(
	'recharge_payment_status',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING(255)
		},
		parameter: {
			type: Sequelize.INTEGER
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

const RechargeProduct = sequelize.define(
	'recharge_product',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		supp_code: {
			type: Sequelize.STRING(255),
			primaryKey: true
		},
		supp_op: {
			type: Sequelize.STRING(255)
		},
		supp_nominal: {
			type: Sequelize.INTEGER
		},
		supp_price: {
			type: Sequelize.INTEGER
		},
		supp_type: {
			type: Sequelize.STRING(255)
		},
		supp_valid: {
			type: Sequelize.INTEGER
		},
		supp_status: {
			type: Sequelize.STRING(255)
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

const RechargeStatus = sequelize.define(
	'recharge_status',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING(255)
		},
		not_allowed_access: {
			type: Sequelize.TEXT
		},
		redirect: {
			type: Sequelize.TEXT
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

const RechargeType = sequelize.define(
	'recharge_type',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING(255)
		},
		description: {
			type: Sequelize.TEXT
		},
		parameter: {
			type: Sequelize.INTEGER
		}
	},
	{
		timestamps: false, // true = ketambahan 2 kolom create_at & update_at (AUTO) klo false tidak ketambahan
		freezeTableName: true // true = nama table asli , false = nama table ketambahan 's' diakhir
	}
);

Recharge.belongsTo(RechargeProduct, { foreignKey: 'recharge_product_id' });
Recharge.belongsTo(RechargeStatus, { foreignKey: 'recharge_status_id' });
Recharge.hasOne(RechargePayment, { foreignKey: 'recharge_id' });
RechargePayment.belongsTo(RechargePaymentStatus, { foreignKey: 'recharge_payment_status_id' });

module.exports = {
	Recharge: Recharge,
	RechargeDetail: RechargeDetail,
	RechargePayment: RechargePayment,
	RechargePaymentStatus: RechargePaymentStatus,
	RechargeProduct: RechargeProduct,
	RechargeStatus: RechargeStatus,
	RechargeType: RechargeType
};
