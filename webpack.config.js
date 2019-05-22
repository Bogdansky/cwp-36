var webpack = require('webpack');
var path = require('path');
var csso = require('csso-webpack-plugin').default;
var autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, './public'),
	devtool: "source-map",
	entry: {
		"app": "./index.js",
	},
	output: {
		path: path.resolve(__dirname, './public/app'),
		filename: '[name].js'
	},
	module:{
		rules: [
			{
				test: /\.css$/,
				use: [
					{
				loader: 'css-loader',
				options: {
					sourceMap: true
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: [
						autoprefixer({
							browsers:['ie >= 8', 'last 4 version']
						})
					],
					sourceMap: true
				}
			}
			]
			},
			{
				test: /\.jsx$/,
				loader: 'jsx-loader',
				options: {
					loaders: {
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-env',
						'@babel/preset-react']
				}
			}
		]
	},
	plugins: [
		new csso()
	]
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]);
}
