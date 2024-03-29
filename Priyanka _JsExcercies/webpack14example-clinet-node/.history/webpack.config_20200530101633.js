const path = require('path'); //commonJs Import
var TSLintPlugin = require('tslint-webpack-plugin');

module.exports = { //commonJs export
  entry: './src/index.ts',
  output: {
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ui'  
  },
  plugins: [
    new TSLintPlugin({
      files: ['./src/.ts']
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  mode: 'development',
  devtool: 'inline-source-map',
};