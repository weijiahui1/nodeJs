const express = require('express')
const router = express.Router()
const multer = require('multer')

var storage = multer.diskStorage({
  // 指定文件路径
  destination: function (req, file, cb) {
    cb(null, './assests/uploads')
  },
  // 指定文件名
  filename: function (req, file, cb) {
    let extArr = file.originalname.split('.')
    let ext = extArr[extArr.length - 1] // 图片的名字多个带.的情况
    let typeName = new Date().getTime() + parseInt(Math.random() * 9999)
    cb(null, `${typeName}.${ext}`)
  }
})

var upload = multer({ storage: storage })

/**
 * @api {post} /file/uploadImg 上传图片
 * @apiName uploadImg
 * @apiGroup File
 *
 * @apiParam {file} file 图片文件.
 *
 * @apiSuccessExample {json} Success-Response:
 *   {
 *     code: 9999,
 *     msg: '上传成功'
 *     data: '/public/uploads/1577249797053.png'
 *   }
 *   {
 *     code: 1000,
 *     msg: '图片类型不对, 仅支持jpg,png,gif格式的',
 *     data: {
 *        "fieldname": "foodImg",
 *        "originalname": "RFantasyRubbishCans01.png",
 *        "encoding": "7bit",
 *        "mimetype": "image/png", 
 *        "destination": "./uploads",
 *        "filename": "RFantasyRubbishCans01.png",
 *        "path": "uploads/RFantasyRubbishCans01.png",
 *        "size": 5282
 *     }
 *   }
 */
router.post('/uploadImg', upload.single('foodImg'), (req, res) => {
  // req.file 是 `foodImg` 文件的信息
  //   {
  //     "fieldname": "foodImg", // 接受参数的变量名
  //     "originalname": "RFantasyRubbishCans01.png", // 原始的名字
  //     "encoding": "7bit", // 编码类型
  //     "mimetype": "image/png", // 类型
  //     "destination": "./uploads", // 存储的文件地址
  //     "filename": "RFantasyRubbishCans01.png", // 现在的文件名
  //     "path": "uploads/RFantasyRubbishCans01.png", // 路径
  //     "size": 5282 // 文件大小
  //  }
  console.log(req.file)
  let { size, mimetype, filename } = req.file
  let imgTypes = ['jpg', 'jpeh', 'png', 'gif'] // 允许上传的图片类型
  let tmpType = mimetype.split('/')[1]
  // 尺寸限制 小于500k 500*1024 = 512000
  if (imgTypes.indexOf(tmpType) === -1) {
    return res.send({ code: 1000, msg: '图片类型不对, 仅支持jpg,png,gif格式的', data: req.file })
  }
  if (size > 512000) {
    return res.send({ code: 1000, msg: '图片尺寸过大，要小于500k的图片', data: req.file })
  }
  return res.send({ code: 9999, msg: '上传成功1111', data: { 'url': `/public/uploads/${filename}` } })
})

module.exports = router
