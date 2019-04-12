import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/polyfill.js',
	output: [
		{ file: 'index.js', format: 'cjs', strict: false },
		{ file: 'index.mjs', format: 'esm', strict: false }
	],
	plugins: [
		babel(),
		terser(),
		trimContentForBrowser()
	]
};

function trimContentForBrowser () {
	return {
		name: 'trim-content-for-browser',
		renderChunk (code) {
			return code.replace(/;\s*$/, '');
		}
	};
}
