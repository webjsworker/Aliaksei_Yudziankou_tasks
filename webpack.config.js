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
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                        /* {
                            loader: 'sass-resources-loader',
                            options: {
                              resources: ['colors.scss', 'head.scss']
                            },
                          }, */
                    ],
                },
            ],
        },
   /*  } */
}



