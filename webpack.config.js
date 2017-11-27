const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // run babel when encountering a js file
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        // convert code from scss to css
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true //tell devServer for all 404 pages to send back html file
  }
};
