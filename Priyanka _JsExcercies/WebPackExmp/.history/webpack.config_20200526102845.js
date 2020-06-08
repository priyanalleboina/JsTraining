const path = require('path'); //commonJs Import

module.exports = { //commonJs export
  entry: './src/index.js',
  output: {
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist'),
//   library: 'ui'  
  },
//   mode: 'development'
};