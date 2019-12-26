const express = require('express')
const router = express.Router()
const MailFn = require('../utils/mail')
const User = require('../db/model/userModel')
let codesObj = {}

/**
 * @api {post} /user/reg 用户注册
 * @apiName register
 * @apiGroup User
 *
 * @apiParam {String} username 用户名.
 * @apiParam {String} password 密码.
 *
 * @apiSuccess {Object} firstname Firstname of the User.
 * @apiSuccess {Object} lastname  Lastname of the User.
 */
router.post('/reg', (req, res) => {
    // console.log(req.body)
    // 获取数据
    let { username, password } = req.body
    // 数据处理
    if (username && password) {
        User.find({ username }).then((data) => {
            console.log(data)
            if (data.length === 0) {
                // 用户名不存在可以注册
                User.insertMany({ username, password })
                    .then(() => {
                        return res.send({
                            code: 9999,
                            msg: '注册成功'
                        })
                    }).catch((err) => {
                        return res.send({
                            code: 1000,
                            msg: `${err}服务错误`
                        })
                    })
            } else {
                return res.send({
                    code: 1000,
                    msg: '用户名已存在'
                })
            }
        }).catch((err) => {
            return res.send({
                code: 1000,
                msg: `${err}服务错误`
            })
        })

    } else {
        // 返回数据
        return res.send({
            code: 2000,
            msg: '参数错误'
        })

    }
})

/**
 * @api {post} /user/login 用户登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} username 用户名.
 * @apiParam {String} password 密码.
 *
 * @apiSuccess {Object} firstname Firstname of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      code: 9999,
 *      msg: '登录成功'
 *     }
 *     {
 *      code: 1001,
 *      msg: '用户或密码不正确'
 *     }
 *     {
 *      code: 2000,
 *      msg: '参数错误'
 *     }
 *     {
 *      code: 1000,
 *      msg: '服务器错误'
 *     }
 */
router.post('/login', (req, res) => {
    let { username, password } = req.body
    // 数据处理
    if (username && password) {
        User.find({ username, password }).then((data) => {
            console.log(data)
            if (data.length > 0) {
                res.send({
                    code: 9999,
                    msg: '登录成功'
                })
            } else {
                res.send({
                    code: 1000,
                    msg: '用户或密码不正确'
                })
            }
        }).catch(() => {
            return res.send({
                code: 1000,
                msg: '服务错误'
            })
        })
    } else {
        // 返回数据
        return res.send({
            code: 2000,
            msg: '参数错误'
        })
    }
})

/**
 * @api {post} /user/getMailCode 获取邮箱验证码
 * @apiName mailCode
 * @apiGroup User
 *
 * @apiParam {String} mail 邮箱.
 * 
 * @apiSuccess {Object} firstname Firstname of the User.
 * @apiSuccess {Object} lastname  Lastname of the User.
 */

// 往邮箱里发送验证码
router.post('/getMailCode', (req, res) => {
    let { mail } = req.body
    let code = parseInt(Math.random() * 10000) // 随机的验证码

    MailFn.sendMailFn(mail, code).then((data) => {
        // 将邮箱和验证码存储到缓存中
        codesObj[mail] = code
        console.log(codesObj)
        res.send({ code: 9999, data, msg: '验证码发送成功' })
    }).catch(() => {
        res.send({ code: 1000, msg: '验证码发送失败' })
    })
})

module.exports = router
