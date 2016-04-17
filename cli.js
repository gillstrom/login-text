#!/usr/bin/env node
'use strict';
var meow = require('meow');
var loginText = require('./');

var cli = meow(`
	Example
	  $ login-text "Welcome to my computer"
`);

loginText(cli.input[0]);
