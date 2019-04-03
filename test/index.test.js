test("polyfill", () => {
	delete Array.prototype.flat;
	delete Array.prototype.flatMap;
	expect([].flat).toBeUndefined();
	expect([].flatMap).toBeUndefined();
	require("../src/index");
	expect([].flat).toBeDefined();
	expect([].flatMap).toBeDefined();
});
