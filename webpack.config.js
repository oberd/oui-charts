// var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        build: './src/Charts.js'
    },
    output: {
        filename: 'Charts.js',
        library: 'Charts',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loaders: [/* 'react-hot', */ 'babel-loader?compact=true']
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
            { test: /\.(ttf|eot|woff)(\?.*)?$/, loader: 'file-loader?name=fonts/[name].[ext]?[hash]' },
            { test: /\.(png|jpg|gif)(\?.*)?$/, loader: 'file-loader?name=images/[name].[ext]?[hash]' },
            { test: /\.svg(\?.*)?$/, loader: 'url-loader?name=fonts/[name].[ext]?[hash]&limit=10000&mimetype=image/svg+xml' }
        ]
    },
    postcss: [
        require('autoprefixer')(),
        require('postcss-import')(),
        require('postcss-custom-properties')(),
        require('postcss-calc')(),
        require('postcss-color-function')(),
        require('postcss-color-hex-alpha')(),
        require('postcss-custom-media')(),
        require('postcss-font-variant')()
    ],
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'react-addons-transition-group': {
                root: 'React',
                commonjs2: 'react-addons-transition-group',
                commonjs: 'react-addons-transition-group',
                amd: 'react-addons-transition-group'
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            },
            d3: {
                root: 'd3',
                commonjs2: 'd3',
                commonjs: 'd3',
                amd: 'd3'
            }
        }
    ],
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('style.css', { allChunks: true })
        // new webpack.HotModuleReplacementPlugin()
    ]
};
