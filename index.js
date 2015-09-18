'use strict';
var execFile = require('child_process').execFile;

module.exports = function (str, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	var cmd = 'sudo';
	var args = [
		'defaults',
		'write',
		'/Library/Preferences/com.apple.loginwindow',
		'LoginwindowText',
		str
	];

	execFile(cmd, args, function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb();
	});
};
