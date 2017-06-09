const express = require('express');
const router = express.Router();
const handleImg = require('../lib/handleImg');
const path = require('path');
/* GET home page. */
router.get('/:size/:bgColor/:fontColor', function (req, res, next) {

  let conf = {
    size: req.params.size,
    bgColor: req.params.bgColor,
    fontColor: req.params.fontColor
  };

  const imgName = path.join(__dirname, '../i/' + req.url.split('/').join('m') + '.jpg');
  handleImg(conf, imgName, function () {
    res.sendFile(imgName);
  });
});

module.exports = router;