const express = require('express');
const path = require('path');

const PORT = process.env['PORT'] || 5000;

// Existing Server routes...
const app = require('./lib/app.js')();

if (process.env.NODE_ENV !== 'production') {
  /*
   * Development Only - Start
   */
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  const LogPlugin = require('./log-plugin');

  webpackConfig.plugins.push(new LogPlugin(PORT));

  const compiler = webpack(webpackConfig);
  const webpackMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false,
      children: false,
    }
  });

  app.use(webpackMiddleware);
  app.use(require('webpack-hot-middleware')(compiler, {
    log: () => {}
  }));

  const mfs = webpackMiddleware.fileSystem;
  const file = path.join(webpackConfig.output.path, 'index.html');

  webpackMiddleware.waitUntilValid();

  app.use(express.static('dist'));
  /*
   * React-Router catch-all-route */
  app.get('*', (req, res) => {
    webpackMiddleware.waitUntilValid(() => {
      const html = mfs.readFileSync(file);
      res.end(html);
    });
  });
  /* Development Only - End */
} else {
  /*
   * Production Ready - Start
   */
  app.use(express.static('dist'));
  /*
   * React-Router catch-all-route */
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  /* Production Ready - End */
}

console.log('Running @ http://localhost:' + PORT + '. Press ^C to Terminate.');
app.listen(PORT);
