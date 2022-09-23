const express = require('express')
const app = express()

// 设置请求体解析格式必须在所有之上！
app.use(express.urlencoded({ extended: false }))

// 必须在配置cors中间件之前配置JSONP接口
app.get('/api/jsonp', (req, res) => {
    // 1.得到函数名称
    const funcName = req.query.callback
    // 2.调用发送到客户端的数据
    const data = { name: 'lwh', age: 18 }
    // 3.拼接出函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4.拼接后的字符串响应给客户端
    res.send(scriptStr)
})


// 一定要在路由之前配置cors，解决跨域问题
const cors = require('cors')
// 注册cors
app.use(cors())

const router = require('./apiRouter')
// 注册路由模块且统一访问路径api
app.use('/api', router)


app.listen(8080, () => console.log('express server running at http://127.0.0.1:8080'))