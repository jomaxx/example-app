var config = require('./common');
var webpack = require('webpack');

var port = parseInt(process.env.PORT);
var hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

Object.keys(config.entry).forEach(function (x) {
  config.entry[x] = [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    config.entry[x]
  ];
});

config.devtool = 'source-map';

config.module.loaders.push({
  test: /\.js$/,
  loaders: ['react-hot', 'babel'],
  include: [config.context]
});

config.plugins.push(hotModuleReplacementPlugin);

module.exports = config;
