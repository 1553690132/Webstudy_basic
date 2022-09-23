const express = require('express')
const app = express()

// 定义中间件函数
const mw = function (req, res, next) {
    console.log('最简单的中间件！')
    // 转交流转关系至下一个中间件或路由
    next()
}

app.listen(8080, () => console.log('http://127.0.0.1:8080'))