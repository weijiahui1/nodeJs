'use strict';
const nodemailer = require('nodemailer');

// 创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',// 发送方邮箱 qq node5/node_modules/nodemailer/lib/well-known/services.json
    port: 465, // 端口号
    secure: true, // true for 465, false for other ports
    auth: {
        user: '971294721@qq.com', // 发送方的邮箱地址
        pass: testAccount.pass // smtp验证码
    } 
});
// 邮件信息/邮件内容
let mailObj = {
    from: '"Fred Foo 👻" <971294721@qq.com>', // sender address
    to: '971294721@qq.com, baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body 只能是string
    html: '<b>Hello world?</b>' // html body
}
// text 和 html 只能存在一个 后面的会覆盖前面的

// 发送邮件
let info = transporter.sendMail(mailObj, (err, msg) => {
    console.log(err);
    console.log(msg);
});
