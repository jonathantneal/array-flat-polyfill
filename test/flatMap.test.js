import { flatMap } from "../src/flatMap";

test("flatMap() examples", () => {
	expect(flatMap.call([1, 2, 3, 4], x => [x * 2])).toEqual([2, 4, 6, 8]);
});

test("only one level is flattened", () => {
	expect(flatMap.call([1, 2, 3, 4], x => [[x * 2]])).toEqual([[2], [4], [6], [8]]);
});

test("generate a list of words from a list of sentences", () => {
	expect(flatMap.call(["it's Sunny in", "", "California"], x => x.split(" "))).toEqual(["it's","Sunny","in", "", "California"]);
});

test("remove all the negative numbers and split the odd numbers into an even number and a 1", () => {
	const arr = [5, 4, -3, 20, 17, -33, -4, 18];
	const map = n => n < 0
		? []
		: n % 2 == 0
			? [n]
			: [n - 1, 1];
	expect(flatMap.call(arr, map)).toEqual([4, 1, 4, 20, 16, 1, 18]);
});
