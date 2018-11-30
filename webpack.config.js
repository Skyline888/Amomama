'use strict';

const path = require('path');

module.exports = {
    entry: "./js/init",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "build.js",
        publicPath: "/dist"
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/fonts/'
                    }
                }]
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '/img/'
                    }
                }]
            }
        ]
    },


    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "eval",
};
