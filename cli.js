#!/usr/bin/env node
'use strict';
var meow = require('meow');
var loginText = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ login-text "Welcome to my computer"'
	]
});

loginText(cli.input[0] || '', function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
