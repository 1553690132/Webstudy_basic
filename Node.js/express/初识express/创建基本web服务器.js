// 导入express
const express = require('express')
// 创建web服务器
const app = express()
// 启动web服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1:8080')
})