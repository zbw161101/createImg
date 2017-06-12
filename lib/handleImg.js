/**
 * Created by ZhaoBoWen on 2017/3/27.
 */

const fs = require('fs');
const paintImg = require('./paintImg');
const path = require('path');
/**
 * 生成可用图片
 * @param conf 图片参数
 * @param imgName 图片名称
 * @param cb 回调
 */
module.exports = function (conf, imgName, cb) {

  const imgBuffer = paintImg(conf);
  // base64数据去掉前缀
  const imgData = imgBuffer.replace(/^data:image\/\w+;base64,/, '');
  const dataBuffer = new Buffer(imgData, 'base64');
  // 写入图片
  fs.writeFile(imgName, dataBuffer, function (err) {
    if (err) {
      console.log(err)
    }
    cb()
  })

}