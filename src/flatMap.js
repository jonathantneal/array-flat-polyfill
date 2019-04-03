export function flatMap(callback, thisArg) {
	return Array.prototype.map.apply(this, arguments).flat();
}
