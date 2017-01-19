var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var projectRoot = path.resolve(__dirname, './');

var VENDOR_LIBS = [
  'axios',
  'async',
  'classnames',
  'lodash',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'redux-promise',
  'redux-thunk',
  'reselect',
];

module.exports = {
  context: projectRoot,
  devtool: 'source-map',

  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(projectRoot, 'src'),
    ],
    extensions: ['*', '.js', '.css', '.json'],
    alias: {
      root: path.resolve(projectRoot, 'src'),
      actions: path.resolve(projectRoot, 'src/actions'),
      components: path.join(projectRoot, 'src/components'),
      reducers: path.resolve(projectRoot, 'src/reducers'),
      selectors: path.resolve(projectRoot, 'src/selectors')
    },
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.join(projectRoot, 'src'),
        output: {
          path: path.join(projectRoot, 'dist'),
        },
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
