const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};