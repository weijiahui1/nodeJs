// 2. 创建文件夹

const fs = require('fs');
/*fs.mkdir('./test', (err) => {
    console.log(err);
})
*/
// 3.更改文件夹名字

/*fs.rename('./test','./test01', (err) => {
    if (err) {
        console.log('更改失败')
    } else {
        console.log('ok')
    }
})*/

// 4. 删除 注意只能删除空文件夹

/*fs.rmdir('../node1', (err) => {
    if (err) {
        console.log('删除失败')
        console.log(err);
    } else {
        console.log('删除成功')
    }
})*/