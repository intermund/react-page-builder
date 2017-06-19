module.exports = {
	babelrc: false,
	cacheDirectory: true,
	presets: [[ 'latest', { modules: false } ],
		'stage-0',
		'react'
	],
	plugins: [
		'react-hot-loader/babel',
		'transform-runtime',
		'babel-plugin-transform-react-constant-elements'
	]
}
