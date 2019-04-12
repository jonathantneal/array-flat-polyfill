module.exports = {
	presets: [
		['@babel/preset-env', {
			corejs: 3,
			loose: true,
			targets: 'ie >= 9',
			useBuiltIns: 'entry'
		}]
	]
};
