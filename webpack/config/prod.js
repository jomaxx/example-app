var webpack = require('webpack');
var config = require('./common');

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
