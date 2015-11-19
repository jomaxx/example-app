var webpack = require('webpack');
var config = require('./common');

var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
});

config.module.loaders.push({
  test: /\.js$/,
  loaders: ['babel'],
  include: [config.context],
});

config.plugins.push(uglifyJsPlugin);

module.exports = config;
