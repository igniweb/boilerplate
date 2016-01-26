module.exports = [{
	name: 'js',
	entry: './resources/assets/js/app.js',
	output: {
		filename: './public/dist/js/bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.html$/,
			loader: 'raw'
		}]
	}
}/*, {
	name: 'css',
	entry: './resources/assets/css/app.scss',
	output: {
		filename: './public/dist/css/bundle.css'
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}]
	}
}*/]