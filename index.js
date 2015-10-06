'use strict';
var execFile = require('child_process').execFile;
var Promise = require('pinkie-promise');
var pify = require('pify');

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

	return pify(execFile, Promise)(cmd, args);
};
