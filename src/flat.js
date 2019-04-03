export function flat(depth = 1) {
	return this.reduce(
		(acc, val) => {
			if (depth >= 1 && Array.isArray(val)) {
				acc.push(...flat.call(val, depth - 1))
			} else {
				acc.push(val);
			}
			return acc;
		},
		[]
	);
}
