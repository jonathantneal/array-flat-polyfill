import { flat } from "./flat";
import { flatMap } from "./flatMap";

if (!Array.prototype.flat) {
	Object.defineProperties(Array.prototype, {
		flat: {
			configurable: true,
			value: flat,
			writable: true
		},
		flatMap: {
			configurable: true,
			value: flatMap,
			writable: true
		}
	});
}
