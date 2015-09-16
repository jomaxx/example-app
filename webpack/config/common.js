var path = require('path');
var webpack = require('webpack');

var PATH_SRC = path.resolve(__dirname, '../../src/www');
var PATH_DIST = path.resolve(__dirname, '../../www');

module.exports = {
  context: PATH_SRC,
  entry: {
    client: './client'
  },
  output: {
    path: PATH_DIST,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [PATH_SRC]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: [PATH_SRC]
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
      include: [PATH_SRC]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"' + process.env.NODE_ENV + '"',
        'CLIENT': true
      }
    })
  ]
};
