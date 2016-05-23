'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: 'web',
    historyApiFallback: true,
    cache: true,
    context: __dirname,
    entry: {
        app: path.join(__dirname, 'app/app'),
        vendor: ['react', 'react-dom', 'react-router', 'react-mixin', 'alt', 'history']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        historyApiFallback: true,
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                include: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},

            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }, {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'url?limit=25000'
            },

        ]
    },

    sassLoader: {
        includePaths: [path.join(__dirname, 'node_modules')]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'bundle.vendor.js'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/index.html'),
            title: 'react starter kit with less',
            minify: false,
            inject: 'body'
        }),
        new webpack.NoErrorsPlugin()
    ],
    node: {
        __dirname: true,
        fs: 'empty'
    }
};



