const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    output:{
        publicPath: "/"
    },
    module:{
        rules:[{
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    },{
        test: /\.html$/,
        use: [{
            loader:"html-loader"
        }]
    },{
        test:/\.(jpeg|jpg|png|gif)$/i,
        loader: "file-loader?name=images/[name].[ext]"
    },{
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use:[{
            loader:"file-loader",
            options:{
                name:"[name].[ext]",
                outputPath:"fonts/"
            }
        }]
    },{
        test:/\.(sa|sc|c)ss$/,
        use:[{
           loader: "style-loader"
        },{
            loader: MiniCssExtractPlugin.loader
        },{
            loader: "css-loader"
        }]
    }]
    },
    optimization: {
        splitChunks:{
            chunks: "all"
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
//        new webpack.ProvidePlugin({
//            $: 'jquery',
//            jQuery: 'require',
//            Popper: 'popper-js'
//        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify("http://localhost:8080/api/"),
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css"
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};