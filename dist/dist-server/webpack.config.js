const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: ['babel-polyfill', './src/server.js'],
    output: {
        path: path.join(__dirname, './dist-server'),
        filename: 'server.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [{ test: /\.js$/, loader: 'babel-loader' }, { test: /\.css$/, use: 'css-loader' }, {
            test: /\.svg$/,
            use: ['@svgr/webpack']
        }]
    }
};