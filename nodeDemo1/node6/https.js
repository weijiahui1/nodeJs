const http = require('https')
const fs = require('fs')
const cheerio = require('cheerio')
// let url = 'https://www.bilibili.com/'
let url = 'https://www.qunar.com/'

http.get(url, (res) => {
    // 安全判断
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    console.log(statusCode, contentType);
    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
        // 判断文件类型
        error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
    }

    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume(); // 重置缓存
        return;
    }

    // 数据处理
    let rawData = ''
    // 数据分段 只要接受数据就会触发data 事件 chunk 每次接受的数据片段
    res.on('data', (chunk) => {
        // console.log(chunk.toString('utf8'))
        rawData += chunk.toString('utf8')
        console.log('数据传输中')
    })
    // 数据流传输完毕
    res.on('end', () => {
        // fs.writeFileSync('./bili.html', rawData)
        // fs.writeFileSync('./qunawang.html', rawData)
        let $ = cheerio.load(rawData)
        $('img').each((index, el) => {
            console.log($(el).attr('src'))
        })
        console.log('数据传输完毕')
    })
}).on('error', (err) => {
    console.log('请求出错了')
})