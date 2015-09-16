import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import * as routes from './routes';

const app = express();
const isDev = app.get('env') === 'development';

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (isDev) {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const compiler = webpack(require('../../webpack.dev.config'));

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/'
    })
  );
}

app.use(express.static(path.join(__dirname, '../../www')));

if (isDev) {
  app.use(function (req, res, next) {
    res.locals.pathJS = function (name) {
      return '/js/' + name + '.js';
    };

    res.locals.pathCSS = function (name) {
      return '/css/' + name + '.css';
    };

    next();
  });
} else {
  const webpackAssets = require('../webpack-assets');

  app.use(function (req, res, next) {
    res.locals.pathJS = function (name) {
      var filename = (
        webpackAssets &&
        webpackAssets[name] &&
        webpackAssets[name]['js'] ||
        'js/' + name + '.js'
      );

      return '/' + filename;
    };

    res.locals.pathCSS = function (name) {
      var filename = (
        webpackAssets &&
        webpackAssets[name] &&
        webpackAssets[name]['css'] ||
        'css/' + name + '.css'
      );

      return '/' + filename;
    };

    next();
  });
}

for (let x in routes) {
  if (routes.hasOwnProperty(x) && x !== '__esModule') {
    app.use(routes[x].path || path.join('/', x), routes[x].router);
  }
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (isDev) {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;
