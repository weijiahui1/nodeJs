'use strict';
const nodemailer = require('nodemailer');

// 创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',// 发送方邮箱 qq node5/node_modules/nodemailer/lib/well-known/services.json
    port: 465, // 端口号
    secure: true, // true for 465, false for other ports
    auth: {
        user: '971294721@qq.com', // 发送方的邮箱地址
        pass: 'testAccount.pass' // smtp验证码
    }
});

function sendMailFn(mail, code) {
    // 邮件信息/邮件内容
    let mailObj = {
        from: '"Fred Foo 👻" <971294721@qq.com>', // sender address
        to: mail, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: `您的验证码是：${code}`, // plain text body 只能是string
        // html: '<b>Hello world?</b>' // html body
    }
    // text 和 html 只能存在一个 后面的会覆盖前面的
    return new Promise((resolve, reject) => {
        // 发送邮件
        transporter.sendMail(mailObj, (err, msg) => {
            if (err) {
                reject(err)
            } else {
                resolve(msg)
            }
        });
    })
}

module.exports = { sendMailFn }
