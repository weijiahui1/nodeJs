const url = require('url')
let urlString = 'https://www.baidu.com/s?ie=UTF-8&wd=mkDown'
/* let urlObj = url.parse(urlString)
console.log(urlObj) */

let urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?ie=UTF-8&wd=mkDown',
  query: 'ie=UTF-8&wd=mkDown',
  pathname: '/s',
  path: '/s?ie=UTF-8&wd=mkDown',
  href: 'https://www.baidu.com/s?ie=UTF-8&wd=mkDown'
}
let stringUrl = url.format(urlObj);
console.log(stringUrl);

/*
url 类比json 记忆
url.parse 将url字符串转成对象
url.format 将url对象转成字符串
json 是数据格式
json对象： json格式的对象
json字符串： json格式的字符串
*/
