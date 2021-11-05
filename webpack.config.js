const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].app.js',
    },
    devtool: 'source-map',
    watch: true,
    plugins: [
        new CleanWebpackPlugin(),
    ],
}