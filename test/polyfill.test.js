test('polyfill', () => {
	delete Array.prototype.flat;
	delete Array.prototype.flatMap;

	expect([].flat).toBeUndefined();
	expect([].flatMap).toBeUndefined();

	require('../src/polyfill');

	expect([].flat.name).toEqual('flat');
	expect([].flatMap.name).toEqual('flatMap');
	expect([].flat.length).toEqual(0);
	expect([].flatMap.length).toEqual(1);
});
