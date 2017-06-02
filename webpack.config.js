var path = require('path');
var webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ template: './src/index.html' });

var config = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig,
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })

    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',

};

module.exports = config;