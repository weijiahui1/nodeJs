const express = require('express')
const router = express.Router()
const foodModel = require('../db/model/foodModel')

function foodType(id) {
    let typename = ''
    let typeid = typeof id === 'string' ? Number(id) : id
    switch (typeid) {
        case 1:
            typename = '凉菜'
            break;
        case 2:
            typename = '热菜'
            break;
        case 3:
            typename = '酒水'
            break;
        default:
            typename = '其他'
    }
    return typename
}

/**
 * @api {post} /food/add 添加菜品
 * @apiName addfood
 * @apiGroup Food
 *
 * @apiParam {String} name 食物名字.
 * @apiParam {String} price 食物价格.
 * @apiParam {String} desc 食物描述.
 * @apiParam {Number} typeid 食物类型id 1：凉菜 2：热菜 3: 酒水.
 * @apiParam {String} img 食物图片.
 *
 * @apiSuccessExample {json} Success-Response:
 *   {
 *     code: 999,
 *     msg: '添加成功'
 *   }
 */
router.post('/add', (req, res) => {
    // let data = {
    //     name: '锅包肉',
    //     price: '3800',
    //     desc: '好吃不腻',
    //     typeid: 2,
    //     img: '/public/img/01.png'
    // }

    let { name, price, desc, typeid, img } = req.body
    let typename = foodType(typeid)
    // 判断参数是否正确
    if (name && name != '' && price && price != '' && desc && desc != '' && typeid && typeid != 0 && img && img != '') {
        // 判断参数是否重复
        foodModel.find({ name }).then((data) => {
            if (data.length === 0) {
                foodModel.insertMany({ name, price, desc, typename, typeid, img })
                    .then(() => {
                        return res.send({ code: 9999, msg: '添加成功' })
                    })
                    .catch((error) => {
                        console.log(error)
                        return res.send({ code: 1000, msg: '添加失败' })
                    })
            } else {
                return res.send({ code: 1000, msg: '添加重复' })
            }
        })
    } else {
        return res.send({ code: 2000, msg: '参数错误' })
    }
})

/**
 * @api {post} /food/foodlist 获取全部菜品 有参数的时候查询对应的数据
 * @apiName foodlist
 * @apiGroup Food
 *
 * @apiParam {String} name 食物名字.
 * @apiParam {Number} typeid 食物类型id 1：凉菜 2：热菜 3: 酒水.
 *
 * @apiSuccessExample {json} Success-Response:
 *   {
 *     code: 999,
 *     msg: '查询成功'
 *     data: []
 *   }
 */
router.post('/foodlist', (req, res) => {
    let { name, typeid } = req.body
    let data = {}
    if (name) {
        data.name = name
    }
    if (typeid) {
        data.typeid = typeid
    }
    foodModel.find(data)
        .then((data) => {
            if (data.length > 0) {
                return res.send({ code: 9999, msg: '查询成功', data })
            } else {
                return res.send({ code: 9999, msg: '暂无数据' })
            }
        })
        .catch(() => {
            return res.send({ code: 1000, msg: '查询失败' })
        })
})

/**
 * @api {post} /food/getListByKw 关键字查询菜品
 * @apiName getListByKw
 * @apiGroup Food
 *
 * @apiParam {String} kw 关键字查询.
 *
 * @apiSuccessExample {json} Success-Response:
 *   {
 *     code: 999,
 *     msg: '查询成功'
 *     data: []
 *   }
 */
router.post('/getListByKw', (req, res) => {
    let { kw } = req.body
    let reg = new RegExp(kw)
    // foodModel.find({ name: { $regex: reg } })
    foodModel.find({ $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }] })
        .then((data) => {
            if (data.length > 0) {
                return res.send({ code: 9999, msg: '查询成功', data })
            } else {
                return res.send({ code: 9999, msg: '暂无数据' })
            }
        })
        .catch(() => {
            return res.send({ code: 1000, msg: '查询失败' })
        })
})

/**
 * @api {post} /food/del 删除菜品
 * @apiName delfood
 * @apiGroup Food
 *
 * @apiParam {String} id 菜品id.
 *
 * @apiSuccessExample {json} Success-Response:
 *   {
 *     code: 999,
 *     msg: '删除成功'
 *   }
 */
router.post('/del', (req, res) => {
    let { id } = req.body
    if (id) {
        foodModel.remove({ _id: id })
            .then(() => {
                return res.send({ code: 9999, msg: '删除成功' })
            })
            .catch(() => {
                return res.send({ code: 9999, msg: '删除失败' })
            })
    } else {
        return res.send({ code: 2000, msg: '参数错误' })
    }
})

/**
 * @api {post} /food/update 更改菜品信息
 * @apiName update
 * @apiGroup Food
 *
 * @apiParam {String} id 菜品id.
 *
 * @apiSuccessExample {json} Success-Response:
 *   {
 *     code: 999,
 *     msg: '更改成功'
 *   }
 */
router.post('/update', (req, res) => {
    let { id, name, price, desc, typeid, img } = req.body
    let typename = foodType(typeid)
    if (id && name && price && desc && typeid && img) {
        foodModel.updateOne({ _id: id }, { name, price, desc, typeid, typename, img })
            .then(() => {
                return res.send({ code: 9999, msg: '更改成功' })
            })
            .catch(() => {
                return res.send({ code: 1000, msg: '更改失败' })
            })
    } else {
        return res.send({ code: 2000, msg: '参数错误' })
    }
})

/**
 * @api {post} /food/getList 获取菜品(分页)
 * @apiName getList
 * @apiGroup Food
 *
 * @apiParam {Number} pageSize 每页数据条数.
 * @apiParam {Number} page 第几页.
 *
 * @apiSuccessExample {json} Success-Response:
 *   {
 *     code: 999,
 *     msg: '查询成功'
 *   }
 */
router.post('/getList', (req, res) => {
    let pageSize = Number(req.body.pageSize) || 5 // 设置默认的值
    let page = Number(req.body.page) || 1 // 设置默认的值

    foodModel.find().limit(pageSize).skip((page - 1) * pageSize)
        .then((data) => {
            return res.send({ code: 9999, msg: '查询成功', data })
        })
        .catch(() => {
            return res.send({ code: 1000, msg: '查询失败' })
        })
})

module.exports = router
