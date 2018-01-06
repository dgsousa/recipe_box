var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/app',
	entry: './index.jsx',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: '/node_modules/',
				loaders: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.scss$/,
				exclude: '/node_modules/',
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	}
	
}