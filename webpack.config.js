const path = require('path');

module.exports = {
  mode: "production",
  watch: true,

  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
           loader: 'babel-loader',
           options: {
                presets: [
                  ["@babel/preset-env",
                      {
                      "targets": {
                          "browsers": ['last 2 versions', 'ie >= 11']
                          }
                      }]
                ]
           }
        } 
      }]
  }
};