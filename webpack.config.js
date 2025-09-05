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
  devtool: 'eval-source-map', // Changed to eval-source-map for better performance during development
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
};