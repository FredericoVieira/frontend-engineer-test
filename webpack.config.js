var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/components/index.jsx',
  output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx','.json'] 
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
}; 

module.exports = config;