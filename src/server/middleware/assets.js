import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from '../../webpack.config';

const webpackMiddleware = (
  process.env.NODE_ENV === 'development' ?
  webpackDevMiddleware(webpack(config), { publicPath: '/' }) :
  function (req, res, next) { next(); }
);

export default webpackMiddleware;
