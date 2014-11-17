var config = {
  development: require('./development.json'), //<co id="callout-config-2-1" />
  production: require('./production.json'),
  test: require('./test.json')
};

module.exports = config[process.env.NODE_ENV || 'development']; //<co id="callout-config-2-2" />
