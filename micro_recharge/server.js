const express = require('express');
const app = express();
var methodOverride = require('method-override');
const path = require('path');
const cors = require('cors');
const con = require('./config/db.js');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');

dotenv.config();
app.use(expressValidator());

// allow request
app.use(cors());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	// allow preflight
	if (req.method === 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
});

// connecting route to database
app.use(function(req, res, next) {
	req.con = con;
	next();
});

// parsing body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// include router
const rechargeRouter = require('./routes/RechargeRouter');

// routing
app.use('/', rechargeRouter);

// starting server
app.listen(process.env.RUN_PORT, function() {
	console.log('server listening on port ' + process.env.RUN_PORT);
});
