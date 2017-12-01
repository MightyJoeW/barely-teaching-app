const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
  // check if env is the string 'production'
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");
  return {
    entry: "./src/app.js",
    output: { path: path.join(__dirname, "public"), filename: "bundle.js" },
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
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map", // setup big file to only load when user opens devtools
    devServer: {
      contentBase: path.join(__dirname, "public"), //tell devServer for all 404 pages to send back html file
      historyApiFallback: true
    }
  };
};

const OfflinePlugin = require("offline-plugin");
