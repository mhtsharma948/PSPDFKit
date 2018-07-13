const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('../helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const browserPlugin = require('webpack-browser-plugin');
const chromeUserDataDir = '../../dist';
const path = require('path');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts',
        'styles': './src/global.scss'
    },

    resolve: {
        extensions: [
            '.js', '.ts'
        ]
    },

    module: {
        rules: [{
                test: /\.ts$/,
                use: ['awesome-typescript-loader?configFileName=config/tsconfig.json', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, helpers.root('src', 'global.scss')],
                use: ['to-string-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /global\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'lallan.html',
            template: 'src/lallan.html'
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src'), {}
        ),

        new CopyWebpackPlugin([
            { from: 'src/pspdfkit-lib', to: './pspdfkit-lib' }
        ]),

        // new browserPlugin({
        //     openOptions: {
        //         app: [
        //             'chrome',
        //             '--incognito',
        //             '--disable-web-security', // to enable CORS
        //             '--user-data-dir=' + path.resolve(chromeUserDataDir) // to let Chrome create and store here developers plugins, settings, etc.
        //         ]
        //     }
        // })
    ]
};