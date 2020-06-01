/*
 * @Author: fangbao
 * @Date: 2020-06-01 00:02:42
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-01 00:59:07
 * @FilePath: /xt-crm/Users/fb/Documents/fangbao/webpack/webpack.config.js
 */
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: './src'
  },
  output: {
    filename: 'bundle.js',
    publicPath: './dist'
  },
  recordsPath: path.join(__dirname, 'records.json')
}