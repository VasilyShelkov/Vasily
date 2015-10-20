var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './app/App',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [{
      test: /\.tag$/, 
      include: path.join(__dirname, 'app'), 
      loader: 'riotjs-loader', 
      query: { type: 'es6' } 
    }],
    loaders: [{
      test: /\.js|\.tag$/, 
      include: path.join(__dirname, 'app'), 
      loader: 'babel-loader', 
      query: {modules: 'common'}
    }]
  },
  devServer: {
    contentBase: './public',
    hot: true,
    inline: true
  }
};