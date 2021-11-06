const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
    return {
        entry: {
            main: path.resolve(__dirname, './index.js'),
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].app.js',
        },
        /* devtool: 'source-map', */
        watch: false,
        plugins: [
            new CleanWebpackPlugin(),
            new Dotenv({
                path: `./.env.${env}`
            }),
        ],
    }
}