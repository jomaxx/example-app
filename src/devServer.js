import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';
import webpack from 'webpack';

let server;

for (let x in config.entry) {
  if (config.entry.hasOwnProperty(x)) {
    if (typeof config.entry[x] === 'string') {
      config.entry[x] = [config.entry[x]];
    }

    config.entry[x].unshift(
      'webpack-dev-server/client?http://localhost:' + process.env.DEV_PORT,
      'webpack/hot/only-dev-server'
    );
  }
}

config.module.loaders[0].loaders.unshift('react-hot');

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

server = new WebpackDevServer(webpack(config), {
  publicPath: '/',
  hot: true,
  proxy: {
    "*": "http://localhost:" + process.env.PORT
  }
});

server.listen(process.env.DEV_PORT, 'localhost', function (err) {
  if (err) {
    throw err;
  }

  console.log('Webpack listening at localhost:' + process.env.DEV_PORT);
});

export default server;
