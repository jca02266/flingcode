const path = require('path');
module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: {
    mylib: './src/mylib.js',
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
  }
}
