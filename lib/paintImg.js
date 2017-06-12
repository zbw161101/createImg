const Canvas = require('canvas');
/**
 * 绘制图片
 * @param conf 图片参数
 * @returns {String}
 */
module.exports = function(conf) {

    const size = conf.size.split('*');

    const canvas = new Canvas(+size[0], +size[1]);
    const ctx = canvas.getContext('2d');
    // 绘制背景
    ctx.rect(0,0,+size[0],+size[1]);
    ctx.fillStyle = '#' + conf.bgColor;
    ctx.fill();
    // 绘制文字
    ctx.fillStyle = '#' + conf.fontColor;
    ctx.font="20px Arial";
    // ctx.fillText(conf.size, (size[0] - (conf.size.length * 50)) * 2, size[1] / 2 + 25);
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.fillText(conf.size, size[0] / 2, size[1] / 2);

    return canvas.toDataURL();

}