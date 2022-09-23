const express = require('express')
const app = express()

// 设置请求体解析格式必须在所有之上！
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前配置cors，解决跨域问题
const cors = require('cors')
// 注册cors
app.use(cors())

const router = require('./apiRouter')
// 注册路由模块且统一访问路径api
app.use('/api', router)


app.listen(8080, () => console.log('express server running at http://127.0.0.1:8080'))