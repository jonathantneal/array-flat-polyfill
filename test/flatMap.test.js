import { flatMap } from "../src/flatMap";

test("flatMap() examples", () => {
	expect(flatMap.call([1, 2, 3, 4], x => [x * 2])).toEqual([2, 4, 6, 8]);
});
