'use strict';
var execa = require('execa');

module.exports = function (str) {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	var cmd = 'sudo';
	var args = [
		'defaults',
		'write',
		'/Library/Preferences/com.apple.loginwindow',
		'LoginwindowText',
		str
	];

	return execa(cmd, args);
};
