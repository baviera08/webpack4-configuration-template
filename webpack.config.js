const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // loaders: ['style-loader', 'css-loader'],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ]
            },
            //For serve img
            {
                test: /\.(gif|jpe?g|png|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 20000, // Convert images < 8kb to base64 strings
                        name: '/[hash]-[name].[ext]'
                    }
                }]
            },
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
