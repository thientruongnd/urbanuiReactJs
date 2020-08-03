/**
Mr : Dang Xuan Truong
Email: truongdx@runsystem.net
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path')
const srcPath = path.join(__dirname, './src', 'public')
const webpack = require('webpack');
/*const VENDOR_LIBS = [
    'axios',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-devtools-extension',
];*/
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
};

module.exports = {
    entry: {
        bundle: './src/index.tsx',
       // vendor: VENDOR_LIBS,

    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
    },
    module: {
        rules: [

            {
                test: /\.(ts|tsx)?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/
            },
            {
                loader: 'file-loader',
                test: /\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
                exclude: /(node_modules)/,
                options: {
                    outputPath: 'assets/fonts',
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
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
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.$jquery': 'jquery',
            'Popper': 'popper.js',
             PerfectScrollbar: ['perfect-scrollbar', 'default']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ManifestPlugin()
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.s?css$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true,
                },
            }
        },
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    devServer
}
