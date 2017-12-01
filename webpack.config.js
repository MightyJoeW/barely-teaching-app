const path = require("path");

module.exports = env => {
  // check if env is the string 'production'
  const isProduction = env === "production";
  console.log("env", env);
  return {
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
    // setup big file to only load when user opens devtools
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      //tell devServer for all 404 pages to send back html file
      historyApiFallback: true
    }
  };
};

const OfflinePlugin = require("offline-plugin");
