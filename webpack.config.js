const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // Automatically clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transform JavaScript files using Babel
        exclude: /node_modules/, 
        use: 'babel-loader'
      },
      {
        test: /\.css$/, // Handle CSS files with style-loader and css-loader
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'inline-source-map', // Use inline-source-map for faster builds
  devServer: {
    static: './dist'
  }
};