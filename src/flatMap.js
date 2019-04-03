export function flatMap(callback, thisArg) {
	return this.map(callback, thisArg).flat();
}
