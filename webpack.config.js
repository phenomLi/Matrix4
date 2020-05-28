

module.exports = {
    entry: './src/matrix.ts',
    output: {
		filename: './matrix4.js',
     	libraryTarget: 'umd'
    },
    resolve: {
		// 先尝试以ts为后缀的TypeScript源码文件
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/, 
				loader: 'awesome-typescript-loader' 
			}
		]
	},
	//devtool: 'eval-source-map'
};
