// 读取目录树
const fs = require('fs')

fs.readdir('../nodeDemo', (err, dirs) => {
    for (let i = 0; i < dirs.length; i++) {
        fs.stat(dirs[i], (err, stats) => {
            if (stats.isFile()) {
                console.log( '-' + dirs[i])
            } else {
                fs.readdir(dirs[i], (err, dirs1) => {
                    for (let j = 0; j < dirs1.length; j++) {
                        fs.stat(dirs1[j], (err, stats) => {
                            if (stats.isFile()) {
                                console.log('-' + dirs1[j])
                            } else {
                                console.log('-' + dirs1[j])
                            }
                        })
                    }
                })
            }
        })
    }
})



/* fs.stat('./node1', (err, stats) => {
    if (stats.isFile()) {
        console.log('is file')
    } else {
        console.log('is dir')
    }
}) */
