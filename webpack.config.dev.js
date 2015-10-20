var path = require('path');
var webpack = require('webpack');

module.exports = {
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
    loaders: [{ 
      test: /\.tag$/, 
      include: path.join(__dirname, 'app'), 
      loader: 'riotjs-loader', 
      query: { type: 'none' } 
    }, {
      test: /\.js|\.tag$/, 
      include: path.join(__dirname, 'app'), 
      loader: 'babel-loader' 
    }]
  },
  devServer: {
    contentBase: './public'
  }
};