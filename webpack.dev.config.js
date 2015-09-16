var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./webpack.common.config')();

config.devtool = 'eval-source-map';

config.output.filename = 'js/[name].js';

config.plugins.push(
  new webpack.DefinePlugin({
    __DEV__: true
  }),
  new ExtractTextPlugin('css/[name].css')
);

module.exports = config;
