const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
//aqui le decimos que nuestro modulo de entrada sera index.js
module.exports = {
    entry: './src/index.js',
    //donde va a estar el proyecto una vez que este preparado
    output: {
        path: path.resolve(__dirname, 'dist'),
        //nombre al bundle o enpaquetado
        filename: 'bundle.js'
    },
    //extensiones con las que trabajare
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
            test:/\.(js| jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
            },
            {
                test:/\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}