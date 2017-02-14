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
				loader: "babel-loader"
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
	      jQuery: "jquery"
	    })
  	],

	postcss: {}
	
	
}