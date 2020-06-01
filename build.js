/*
 * @Author: fangbao
 * @Date: 2020-06-01 00:07:01
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-01 00:33:30
 * @FilePath: /xt-crm/Users/fb/Documents/fangbao/webpack/build.js
 */
const webpack = require("webpack");
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

compiler.hooks.compile.tap('MyPlugin', params => {
  console.log('以同步方式触及 compile 钩子。')
})

compiler.hooks.afterEmit.tapAsync('MyPlugin', (compiler, callback) => {
  console.log('after emit')
  callback()
})

compiler.run((err, stats) => {
  // console.log(stats, 'run')
  const info = stats.toString({
    // 增加控制台颜色开关
    chunks: false,
    colors: true
  });
  console.log(info)
});
