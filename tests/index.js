// es6 promise polyfill is only required
// when using karma-phantomjs-launcher
require('es6-promise').polyfill();

// see https://github.com/webpack/karma-webpack#alternative-usage

// require all files in ~/src
const src = require.context('../src', true, /^*\.jsx?/);
src.keys().forEach(src);

const tests = require.context('.', true, /.+\.test\.jsx?$/);
tests.keys().forEach(tests);
