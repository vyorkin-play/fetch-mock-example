'use strict';

require('babel/register');

var path = require('path');
var webpackConfig = require('./webpack.config.js');

const testsPath = path.resolve(__dirname, './tests/index.js');
var karmaConfig = {
  files: [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    testsPath
  ],
  frameworks: [
    'mocha',
    'sinon-chai',
    'chai-as-promised',
    'chai',
  ],
  preprocessors: {
    [testsPath]: ['webpack', 'sourcemap']
  },
  reporters: ['mocha'],
  browsers: ['PhantomJS'],
  webpack: webpackConfig,
  plugins: [
    'karma-webpack',
    'karma-sourcemap-loader',
    'karma-mocha',
    'karma-mocha-reporter',
    'karma-chai',
    'karma-chai-as-promised',
    'karma-sinon-chai',
    'karma-phantomjs-launcher',
  ],
  singleRun: true,
  autoWatch: true,
  autoWatchBatchDelay: 0,
  reportSlowerThan: 20,
  concurrency: 2,
  browserNoActivityTimeout: 30000,
};

module.exports = function(config) {
  config.set(karmaConfig)
};
