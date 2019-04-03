export function flat(depth = 1) {
	return this.reduce(
		(acc, val) => Array.isArray(val)
			? acc.concat(val.flat(depth - 1))
			: acc.concat(val),
		[]
	);
}
