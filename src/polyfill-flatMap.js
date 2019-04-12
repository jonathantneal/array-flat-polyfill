if (!Array.prototype.flatMap) {
	Object.defineProperty(Array.prototype, 'flatMap', {
		configurable: true,
		value: function flatMap (callback) {
			return Array.prototype.map.apply(this, arguments).flat();
		},
		writable: true
	});
}
