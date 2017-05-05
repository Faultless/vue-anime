const webpack = require('webpack');
ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');

module.exports = {
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        path: path.join(__dirname, 'dist'),  
        filename: 'bundle.[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }],
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader', 'postcss-loader'],
                }),
            }, 
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'bundle.[name].css'}),
        new webpack.ProvidePlugin({
            "window.Vue": "Vue"
        }),
        // new PurifyCSSPlugin({ paths: glob.sync(path.join(__dirname, 'src/**/*.js'), { nodir: true }) })
    ],
};