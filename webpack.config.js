/*
    ./webpack.config.js
*/
    const path = require("path");
    module.exports = {
      entry: ["./src/index.js"],
      output: {
        path: path.resolve(__dirname, "src"),
        filename: "bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          }
        ]
      }
    };
