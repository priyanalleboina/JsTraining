const path = require('path'); //commonJs Import

module.exports = { //commonJs export
  entry: './src/index.ts',
  output: {
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ui'  
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};