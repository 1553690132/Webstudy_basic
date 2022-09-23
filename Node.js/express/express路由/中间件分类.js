const express = require('express')
const router = express.Router()
const app = express()

// 应用级别中间件
app.use((req, res, next) => {
    next()
})
app.get('/', (req, res, next) => {
    next()
})

// 路由级别中间件
router.use((req, res, next) => {
    next()
})

app.use('/', router)

// 错误
app.get('/', (req, res) => {
    throw new Error('服务器内部发生错误！') // 抛出自定义错误
    res.send('Home Page')
})
// 定义错误级别中间件捕获错误
app.use((err, req, res, next) => {
    console.log('发生错误' + err.message);
    res.send('Error' + err.message)
})

// 解析application/json格式数据的内置中间件
app.use(express.json())

// 解析application/x-www-form-urlencoded格式数据的内置中间件
app.use(express.urlencoded({ extended: false }))

