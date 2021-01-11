const path = require('path');
module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: {
    app: './src/app.js',
  },
  optimization: {
    minimize: true
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `[name].js`,
    library: '[name]',
    libraryTarget: 'umd',
  },

  resolve: {
    modules: ["node_modules"],
    extensions: ['.js'],
    alias: {
        '@': path.resolve(__dirname, 'src'),
        'vue$': 'vue/dist/vue.esm.js',
    },
  }
}
