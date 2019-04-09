export function flat(depth = 1) {
	return Array.prototype.reduce.call(this,
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
