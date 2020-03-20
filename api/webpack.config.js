const path = require('path');
// const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line import/no-unresolved
const slsw = require('serverless-webpack');

module.exports = {
  optimization: {
    minimize: false
  },
  // externals: [nodeExternals()],
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }],
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        failOnWarning: true
      }
    }]
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, '.')
    }
  }
};
