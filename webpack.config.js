var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/app',
	entry: './index.jsx',
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: '/node_modules/',
				loaders: ["babel-loader", "eslint"]
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass'],
				exlude: '/node_modules/'
			},
      		{ 
      			test: /bootstrap\/dist\/js\/umd\//, 
      			loaders: ['imports?jQuery=jquery'] 
      		},
      		{ 
      			test: /\.json$/, 
      			loader: 'json' 
      		}
		]
	},

	plugins: [
				  new webpack.ProvidePlugin({
				    $: "jquery",
				    jQuery: "jquery",
				    "window.jQuery": "jquery",
				    Tether: "tether",
				    "window.Tether": "tether",
				    Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
				    Util: "exports-loader?Util!bootstrap/js/dist/util"
				  })
			],

	postcss: {}
	
	
}