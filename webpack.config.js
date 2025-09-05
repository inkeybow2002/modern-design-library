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
  devtool: 'source-map', // Changed to source-map for improved debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    client: {
      overlay: true,
    }, // Added client overlay for better error visibility
  }
};