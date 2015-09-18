#!/usr/bin/env node
'use strict';
var meow = require('meow');
var loginText = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ login-text [input]'
	]
});

loginText(cli.input[0] || '', function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
