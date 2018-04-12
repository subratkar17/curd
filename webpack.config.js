const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js| jsx$/,
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
      { test: /\.(png||jpe?g|woff|woff2|eot|ttf|svg)$/, loader: "url-loader?limit=100000" },
      {test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader?sourceMap=true" ]}
    ]
  },
  mode: "production",
  devServer: {
    port: 6500,
    historyApiFallback: true
  },
  performance: { hints: false },
  plugins: [
    new CleanWebpackPlugin('./dist'),    
    new CopyWebpackPlugin([
      {
        from:"./index.html",
        to: ""
      }
    ])
  ]
};