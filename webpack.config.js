const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = /* () => */ {
    /* return { */
        entry: {
            main: path.resolve(__dirname, './index.js'),
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].app.js',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader,
                        { loader: 'css-loader' }],
                },
                

            ],
        },
   /*  } */
}



