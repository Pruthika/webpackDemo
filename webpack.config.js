var path = require('path');
var webpack = require('webpack'); //to access built-in plugins
var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

var config = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    module: {
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'babel-loader',
        //         query: {
        //             presets: ['es2015']
        //         }
        //     }
        // ]
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.css$/, use: [
                { loader: 'style-loader'},
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]},
            {exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new HtmlWebpackPlugin({template: './src/index.html'}),
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