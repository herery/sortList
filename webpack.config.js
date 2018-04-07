var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: {
		main: './main.js'
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: "/dist/",
		filename: 'main.js'
	},
	module: {
		rules: [
			{
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                	use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
			{
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: {
                //     loaders: {
                //         css: ExtractTextWebpackPlugin.extract({
                //             use: 'css-loader',
                //             fallback: 'vue-style-loader'
                //         })
                //     }
                // }
            },
			{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('style.css')
	],
};

module.exports = config;