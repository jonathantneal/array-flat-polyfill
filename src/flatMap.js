import { flat } from "./flat";

export function flatMap(callback) {
	return flat.call(Array.prototype.map.apply(this, arguments));
}
