const qs = require('querystring')
// parse

/* let string = 'name=wangyi&padd=123&sex=0'
let obj = qs.parse(string)
// 将 query 字符串变成query对象
console.log(obj) */

/* let string2 = 'name=wangyi&padd=123&sex=0'
let obj = qs.parse(string2, '&', '=')
console.log(obj) */

/* let string3 = 'name-wangyi#padd=123#sex-0'
let obj = qs.parse(string3, '#', '-')
console.log(obj) */


// stringify

/* let obj = { name: 'wangyi', padd: '123', sex: '0' }
let string = qs.stringify(obj);
console.log(string); */

/* let obj = { name: 'wangyi', padd: '123', sex: '0' }
let string = qs.stringify(obj, '#', '-');
console.log(string); */

// escape
/* 
let string = 'w=你好&foo=bar'
let res = qs.escape(string)
console.log(res) 
*/

// unescape
/* 
let string = 'w%3D%E4%BD%A0%E5%A5%BD%26foo%3Dbar'
let res = qs.unescape(string);
console.log(res); 
*/
