/*
 * @Author: Nahco.Huang
 * @Date: 2020-09-04 10:08:29
 * @LastEditTime: 2020-09-04 10:12:14
 * @LastEditors: Nahco.Huang
 * @Description:
 */
module.exports = {
  publicPath:process.env.NODE_ENV === 'production'?'./hospital-trend-screen':'./',
  lintOnSave:true
  // loaders:[
  //   {
  //     test:/\.less$/i,
  //     loader:'style!css!less'
  //   }
  // ]
}
