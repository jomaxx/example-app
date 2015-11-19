import http from 'http';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from '../../webpackConfig';
import debug from '../utils/debug';
import app from './app';

const isDev = app.get('env') === 'development';
const port = parseInt(process.env.PORT, 10);
const appPort = isDev ? port + 1 : port;
const server = http.createServer(app);

const devServer = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: '/',
  hot: true,
  proxy: {
    '*': `http://localhost:${appPort}`,
  },
});

app.set('port', port);

function startServer() {
  server.listen(appPort, function (err) {
    if (err) throw err;
    debug(`Application listening at localhost:${port}`);
  });
}

if (isDev) {
  devServer.listen(port, function (err) {
    if (err) throw err;
    startServer();
  });
} else {
  startServer();
}

export default server;
