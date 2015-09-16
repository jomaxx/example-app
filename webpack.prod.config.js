var webpack = require('webpack');
var config = require('./webpack.common.config')();
var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.output.filename = 'js/[name].[hash].js';

config.plugins.push(
  new webpack.DefinePlugin({
    __DEV__: false,
    'process.env': {
      'NODE_ENV': '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new ExtractTextPlugin('css/[name].[hash].css'),
  new AssetsPlugin()
);

module.exports = config;
