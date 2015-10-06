import test from 'ava';
import fn from './';

test(async t => {
	await fn('Test login text');
});
