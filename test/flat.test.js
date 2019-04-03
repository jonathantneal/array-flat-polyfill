import { flat } from "../src/flat";

test("flat() examples", () => {
	expect(flat.call([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
	expect(flat.call([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);
	expect(flat.call([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6]);
	expect(flat.call([1, 2 , 3, [1, 2, 3, 4, [2, 3, 4]]], 2)).toEqual([1, 2, 3, 1, 2, 3, 4, 2, 3, 4]);
	expect(flat.call([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);
	expect(flat.call([[[1]], [2], [3], [4]])).toEqual([[1], 2, 3, 4]);
	expect(flat.call([[[1]], [2], [3], [4]], 2)).toEqual([1, 2, 3, 4]);
})
