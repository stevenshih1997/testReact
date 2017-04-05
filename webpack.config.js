var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.jsx'
	],
	output: {
		filename: 'index_bundle.js',
		path: __dirname + '/dist/',
		publicPath: '/',
	},
	resolve : {
		extensions: [".js", ".jsx"],
	},
	module : {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}	
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [HTMLWebpackPluginConfig]
};
