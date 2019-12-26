
### 自定义模块
相关文件夹 node1

#### 打印当前目录的目录树
相关文件夹 node3
1.实现的效果
2、分析当前功能点
 + 当前目录结构
 + 分辨是文件还是文件夹

### 内置模块 fs
相关文件夹 node2
[fs相关API链接](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html)


### 内置模块 url 
相关文件夹 node4
[url相关API链接](https://nodejs.org/dist/latest-v12.x/docs/api/url.html)
url 统一资源定位符
记住👇的图
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(all spaces in the "" line should be ignored — they are purely for formatting)

##### url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

### 爬虫案例
相关文件夹 node6
1.获取目标网站 http.get
2.分析网站内容 cheerio 可以是有jq里的选择器
3.获取网站信息 下载或者其他操作

### 邮箱验证案例 
相关文件夹 node5
注册案例 18618354008 pass
+ nodemailer 可以实现发邮件 [地址]https://www.npmjs.com/package/nodemailer
+ [npm官网链接]https://www.npmjs.com/package/npm

### 网络基础知识
 + web服务器
 + api服务器