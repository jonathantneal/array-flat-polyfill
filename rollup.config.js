import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/index.js',
	output: { file: 'index.js', format: 'cjs' },
	plugins: [
		babel({
			presets: [ ['@babel/env', { targets: 'ie >= 9' }] ]
		}),
		terser(),
		trimContentForBrowser()
	]
};

function trimContentForBrowser() {
	return {
		name: 'trim-content-for-browser',
		renderChunk(code) {
			const updatedCode = code
				.replace(/^\s*"use strict";\s*/, '')
				.replace(/;\s*$/, '');

			return updatedCode;
		}
	};
}
