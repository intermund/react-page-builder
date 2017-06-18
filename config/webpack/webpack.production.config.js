const { resolve } = require('path')
const webpack = require('webpack')

// Paths
const srcPath = resolve('app')
const distPath = resolve('dist')
const nodeModules = resolve('node_modules')
const excludeNodeModules = /node_modules/
const cssLibs = resolve(srcPath + '/styles')

// Configs
const babelConfig = require('../babel/babel.config')
const appConfig = require('../app/app.config')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtendedDefinePlugin = require('extended-define-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractGlobals = new ExtractTextPlugin('global-styles.css')

const config = {

	entry: [ srcPath + '/index.js' ],
	output: {
		path: distPath,
		publicPath: '',
		filename: 'page.bundle.js'
	},
	resolve: {
		modules: [
			srcPath,
			nodeModules
		],
		extensions: [ '.js', '.json', 'scss' ]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: srcPath,
				exclude: excludeNodeModules,
				loader: 'babel-loader',
				query: babelConfig
			},
			// {
			// 	test: /\.less$/, //Main css extract
			// 	include: [
			// 		srcPath
			// 	],
			// 	exclude: [
			// 		cssLibs, nodeModules
			// 	],
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use: [
			// 			{
			// 				loader: 'css-loader',
			// 				options: {
			// 					minimize: false,
			// 					importLoaders: 2
			// 				}
			// 			},
			// 			{
			// 				loader: 'postcss-loader'
			// 			},
			// 			{
			// 				loader: 'less-loader'
			//
			// 			}
			// 		]
			// 	})
			// },
			{
				test: /\.l?[ec]ss$/, // Globals css extract
				include: [ cssLibs, nodeModules ],
				use: extractGlobals.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: false,
								importLoaders: 2
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'less-loader'

						}
					]
				})
			},
			{
				test: /\.(mp4|webm)(\?.*)?$/,
				include: [ srcPath, nodeModules ],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'static/media/video/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(eot|woff2?|ttf|otf)(\?.*)?$/i,
				include: [ srcPath, nodeModules ],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5120,
							name: 'static/media/fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)(\?.*)?$/i,
				include: [ srcPath, nodeModules ],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5120,
							name: 'static/media/img/[name].[hash:8].[ext]'
						}
					}
				]
			}
		]
	},

	devServer: {
		hot: true,
		contentBase: srcPath,
		publicPath: '/',
		port: 8888,
		inline: true,
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		stats: {
			assets: true,
			children: false,
			chunks: false,
			hash: false,
			modules: false,
			publicPath: false,
			timings: true,
			version: false,
			warnings: true,
			colors: {
				green: '\u001b[32m'
			}
		}
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new HtmlWebpackPlugin({
			inject: 'body',
			template: './index.html'
		}),
		extractGlobals,
		new ExtractTextPlugin({
			filename: 'styles/main.css',
			allChunks: false,
			disable: false
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			},
			mangle: {
				screw_ie8: true
			},
			output: {
				comments: false,
				screw_ie8: true
			}
		}),
		new ExtendedDefinePlugin({
			APP_CONFIG: appConfig
		})
	]

}

module.exports = config