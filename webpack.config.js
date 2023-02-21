// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: false, // disables Hot Reload
        },
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
};
