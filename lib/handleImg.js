/**
 * Created by ZhaoBoWen on 2017/3/27.
 */

const fs = require('fs');
const paintImg = require('./paintImg');
const path = require('path');

module.exports = function(conf, imgName, cb) {
    
    const imgBuffer = paintImg(conf);
    // base64数据去掉前缀
    var imgData = imgBuffer.replace(/^data:image\/\w+;base64,/, '');
    var dataBuffer = new Buffer(imgData, 'base64');

    fs.writeFile(imgName, dataBuffer, function(err) {
        // if (err) throw new Error(err)
        if (err) {
            console.log(err)
        }
        cb()
    })

}