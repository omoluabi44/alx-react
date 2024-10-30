const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Use 'production' for production builds
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Clean the output directory before emit
    },
    devServer: {
        static: './dist', // Serve files from the dist folder
        hot: true, // Enable hot module replacement
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transform ES6+ using Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Load CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i, // Load images
                type: 'asset/resource',
            },
            {
                test: /\.jsx?$/, // Load files for source maps
                use: 'source-map-loader',
                enforce: 'pre',
            },
        ],
    },
    devtool: 'inline-source-map', // Enable source maps
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html', // Use your HTML file as a template
        }),
    ],
};
