import component from './component';

const path = '/';

if (!process.env.CLIENT) {
  require.ensure = function (arr, cb) {
    cb(require);
  };
}

function getChildRoutes(location, callback) {
  require.ensure([], function (require) {
    callback(null, [
      require('./routes/Preview')
    ]);
  });
}

function getIndexRoute(location, callback) {
  require.ensure([], function (require) {
    callback(null, require('./routes/Code'));
  });
}

export {
  path,
  component,
  getIndexRoute,
  getChildRoutes
};
