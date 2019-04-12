import flat from '../src/flat';

test('flat() examples', () => {
	// basic nesting
	expect(flat.call([1, 2, [3, 4]], 0)).toEqual([1, 2, [3, 4]]);
	expect(flat.call([1, 2, [3, 4]], 1)).toEqual([1, 2, 3, 4]);
	expect(flat.call([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);

	// double nesting
	expect(flat.call([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);

	// triple nesting
	expect(flat.call([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);
	expect(flat.call([1, 2, [3, 4, [5, 6]]], 0)).toEqual([1, 2, [3, 4, [5, 6]]]);
	expect(flat.call([1, 2, [3, 4, [5, 6]]], 1)).toEqual([1, 2, 3, 4, [5, 6]]);
	expect(flat.call([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6]);

	// complex nesting
	expect(flat.call([1, 2, 3, [4, [5, 6], 7, [8, 9, 10]]], 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	expect(flat.call([[[1]], [2], [3], [4]])).toEqual([[1], 2, 3, 4]);
	expect(flat.call([[[1]], [2], [3], [4]], 2)).toEqual([1, 2, 3, 4]);
});
