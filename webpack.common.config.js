var PATH_SRC = __dirname + '/src';
var PATH_DIST = __dirname + '/www';
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function () {
  return {
    context: PATH_SRC,
    entry: {
      client: './client'
    },
    output: {
      path: PATH_DIST
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: [PATH_SRC]
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        include: [PATH_SRC]
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
        include: [PATH_SRC]
      }]
    },
    plugins: []
  };
};
