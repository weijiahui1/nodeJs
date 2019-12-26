const express = require('express')
const db = require('./db/connect')

const cors = require('cors') // 解决跨域的中间件

const path = require('path')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded 解析表单数据
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 解析json
app.use(bodyParser.json())

// 静态资源路径
app.use('/public', express.static(path.join(__dirname, './assests')))

// 通过cors解决跨域
app.use(cors())

// 引入路由
const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')
const fileRouter = require('./router/fileRouter')
app.use('/user', userRouter)
app.use('/food', foodRouter)
app.use('/file', fileRouter)


app.listen(3000, () => {
    console.log('server start')
})
