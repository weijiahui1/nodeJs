const fs = require('fs');
// 1、创建文件 覆盖写入
/*
fs.writeFile('name.txt', '今天是2019年11月11日 星期一', err => {
    console.log(err)
})
*/
// 2. 写入文件
/*
fs.appendFile('name.txt', ' 又是一年双十一 ', err => {
    console.log(err)
})
*/
// 3.读取文件
/*
fs.readFile('name.txt', (err, msg) => {
    console.log(err)
    console.log(msg.toString('utf8'))
    // 默认读取二进制数据流 buffer
})
*/
/*
fs.readFile('name.txt', 'utf8', (err, msg) => {
    console.log(err)
    console.log(msg)
    // 默认读取二进制数据流 buffer
})
*/

// 4.删除文件
/*
fs.unlink('./name.txt', err => {
    console.log(err)
})
*/
