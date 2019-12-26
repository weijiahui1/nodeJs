const cheerio = require('cheerio')
let $ = cheerio.load('<div><p>你好</p><img src="http://www.baidu.com" /><p>hello</p></div>')
// 将一组 html 格式的字符串 转化为类dom 之后可以通过jq的语法选中其中的元素
// console.log($('img').attr('src'))
// console.log($('p').text())

$('p').each((index, el) => {
    console.log($(el).text())
})