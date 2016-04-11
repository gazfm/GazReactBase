

module.exports = {
	entry: "./main.js",
	output: {
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				// "test" is commonly used to match the file extension
				test: /\.jsx$/,
				// the "loader"
				loader: "babel-loader",
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ['es2015']
				}
			}
	  	]
	}
};




