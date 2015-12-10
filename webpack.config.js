import path from 'path';
import webpack from 'webpack';

const noParse = [
  /node_modules\/sinon\//
];

export default {
  target: 'web',

  name: 'my awesome app',
  context: path.resolve(__dirname, 'src'),

  module: {
    noParse,
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'test')
        ],
        loader: 'babel'
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: [
      '',
      '.jsx',
      '.js',
      '.css',
      '.scss',
      '.json'
    ],
  },

  debug: true,
  cache: true,

  // source maps are loaded using karma-sourcemap-loader,
  // for more info see https://github.com/webpack/karma-webpack#source-maps
  // and https://github.com/webpack/karma-webpack#source-maps

  devtool: 'inline-source-map'
}
