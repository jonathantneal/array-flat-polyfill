export default function flatMap (callback) {
	return Array.prototype.map.apply(this, arguments).flat();
}
