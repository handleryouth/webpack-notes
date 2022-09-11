const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  /*
   The ultimate goal of html-webpack-plugin is twofold:
  - it loads our HTML files
  - it injects the bundle(s) in the same file
    */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  entry: {
    // Now webpack will look in source/index.js for the first file to load.
    index: "./src/js/index.js",
  },
  //   With this configuration webpack will put the bundle in build instead of dist.
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        /*
     The CSS loader takes a CSS file and returns the CSS with imports and url(...) resolved via webpack's require functionality
  It doesn't actually do anything with the returned CSS.
          */

        /*
          The style loader takes CSS and actually inserts it into the page so that the styles are active on the page.
          */

        /*
              In webpack, the order in which loaders appear in the configuration is of high importance. 
  for example "style-loader" appears before "css-loader". 
  style-loader is for injecting the style in the page, not for loading the actual CSS file.
          */

        /* 
          webpack loader importance order is from right to left.
          */

        // miniCSSExtractPlugin is for extracting the css from the js file and putting it in the css file.
        // separating CSS to a file of its own avoids the problem by letting the browser to manage it separately

        use: ["style-loader", "css-loader"],
      },

      // Notice the order in which loaders appear: first, sass-loader, then css-loader, finally style-loader.
      // {
      //   test: /\.scss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
