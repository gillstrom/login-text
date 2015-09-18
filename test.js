'use strict';
var test = require('ava');
var loginText = require('./');

test('should ', function (t) {
	t.plan(1);

	loginText('unicorns', function (err) {
		t.assert(!err, err);
	});
});
