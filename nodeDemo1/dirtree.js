// 读取目录树
const fs = require('fs')

/* fs.readdir('../nodeDemo', (err, dirs) => {
    for (let i = 0; i < dirs.length; i++) {
        // console.log( '|_ ' + dirs[i])
        fs.stat(dirs[i], (err, stats) => {
            if (stats.isFile()) {
                console.log( '|_ ' + dirs[i])
            } else {
                fs.readdir(dirs[i], (err, cdirs) => {
                    console.log( '|_ ' + dirs[i])
                    for (let j = 0; j < cdirs.length; j++) {
                        console.log('|_ _ ' + cdirs[j])
                    }
                })
            }
        })
    }
}) */


/* fs.stat('./node1', (err, stats) => {
    if (stats.isFile()) {
        console.log('is file')
    } else {
        console.log('is dir')
    }
}) */
