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
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map', // Enable source maps for easier debugging
  devServer: {
    static: './dist'
  }
};