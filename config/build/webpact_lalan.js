var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //...
    entry: {
        'app': './dist/app.d45cbfbd2ccbbc626745.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};