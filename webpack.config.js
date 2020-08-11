/**
Mr : Dang Xuan Truong
Email: truongdx@runsystem.net
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
/* const VENDOR_LIBS = [
    'axios',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-devtools-extension',
]; */
const devServer = {
    port: 4600,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: true,
    stats: true,
    inline: true,
    compress: true,
    contentBase: '/',
    watchOptions: {
        poll: true,
    },
};

module.exports = {
    entry: {
        bundle: './src/index.tsx',
        // vendor: VENDOR_LIBS,

    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: {
                    loader: 'awesome-typescript-loader',
                },
                exclude: /node_modules/,
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                ],
                test: /\.css$/,
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash]-[name].[ext]',
                            outputPath: 'assets/fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash]-[name].[ext]',
                    outputPath: 'assets/images',
                },
            },
            // Scss compiler
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.$jquery': 'jquery',
            Popper: 'popper.js',
            PerfectScrollbar: ['perfect-scrollbar', 'default'],
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new ManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[name].css',
        }),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss'],
    },
    devServer,
};
