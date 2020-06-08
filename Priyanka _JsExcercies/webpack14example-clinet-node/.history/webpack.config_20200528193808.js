const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundler.js',
        path:path.resolve(__dirname,'dist'),
        library:'ui'
    },
   // mode:'development'//it is used to create a code understandable
};