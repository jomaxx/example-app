var configPaths = {
  production: './prod',
  development: './dev'
};

module.exports = require(
  configPaths[process.env.NODE_ENV] ||
  configPaths.development
);
