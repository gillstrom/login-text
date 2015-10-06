import test from 'ava';
import fn from './';

test(t => {
	t.plan(1);

	fn('unicorns', err => {
		t.assert(!err, err);
	});
});
