var path = require('path');
var webpack = require('webpack');

var fileLoader = function(ext) {
  if (!ext) {
    ext = '[ext]';
  }
  return 'file?name=[path][name].' + ext;
}

var jadeLoader = 'jade-html?pretty=true';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jade$/, loaders: [fileLoader('html'), jadeLoader] },
      { test: /\.scss/, loaders: [fileLoader('css'), 'sass'] },
      { test: /\.css$'/, loaders: ['css'] },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: fileLoader() },
      { test: /\.asc/, loader: fileLoader() }
    ]
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.jade', '.png', '.jpg']
  }
};
