const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require('path');

const config = {
  entry: {
    app: './assets/js/script.js',
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name(file) {
                return '[path][name].[ext]';
              },
              publicPath(url) {
                return url.replace('../', '/assets/');
              }
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
    // new WebpackPwaManifest({
    //   name: "Food Event",
    //   short_name: "Foodies",
    //   description: "An app that allows you to view upcoming food events.",
    //   background_color: "#01579b",
    //   theme_color: "#ffffff",
    //   fingerprints: false,
    //   inject: false,
    //   icons: [{
    //     src: path.resolve("assets/img/icons/icon-512x512.png"),
    //     sizes: [96, 128, 192, 256, 384, 512],
    //     destination: path.join("assets", "icons")
    //   }]
    // })
  ],
  mode: 'development'
};

module.exports = config;


//we configured the analyzerMode property with a static value. This will output an HTML file called report.html that will generate in the dist folder. We can also set this value to disable to temporarily stop the reporting and automatic opening of this report in the browser.
// By default, webpack wants to run in production mode. In this mode, webpack will minify our code for us automatically, along with some other nice additions. We want our code to run in development mode, so add the following code: