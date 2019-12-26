const fs = require('fs');
// 1. 读取文件
// 同步读取文件
/*
let dirs = fs.readdirSync('./')
console.log(dirs);
*/
/*
try {
    let dirs = fs.readdirSync('./node.js');
} catch (error) {
    console.log('出错了');
}
console.log(22222);
console.log(dirs);
*/
// 异步读取
/*
fs.readdir('./',(err,data) => {
    if (err) { // err 为真有错误 默认为null
        console.log('读取错误');
    } else {
        console.log('读取成功');
        console.log(data);
    }
})
*/
// 错误的回调优先 在回调函数中 第一个参数表示的是错误对象 默认为null 如果出现错误err 就是错误对象
/*
错误处理：
    同步： try catch
    异步： 错误回调优先
CURD: 增create 删delete 改update 查read
 */




