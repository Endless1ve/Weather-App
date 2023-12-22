const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const env = dotenv.config().parsed;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          esModule: false,
          outputPath: "vendor/images",
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        dependency: { not: ["url"] },
        options: {
          outputPath: "vendor/fonts",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.html",
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      FIRST_API_KEY: JSON.stringify(env.FIRST_API_KEY),
      SECOND_API_KEY: JSON.stringify(env.SECOND_API_KEY),
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
