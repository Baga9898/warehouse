const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv                 = require('dotenv-webpack');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');
const path                   = require('path');

const production = process.env.NODE_ENV === 'production';

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    }
    return config;
}

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: production ? '[name].[contenthash].js' : '[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    !production ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|ico)(\?[a-z0-9=.]+)?$/,
                use: 'url-loader?limit=100000',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'],
    },
    optimization: optimization(),
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'WHS',
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
        new Dotenv(),
    ],
    devServer: {
        port: 3001,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    mode: production ? 'production' : 'development',
}