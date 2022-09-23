const express = require('express')
const app = express()

// 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
// 注册中间件
app.use(parser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})
app.listen(8080, () => console.log('http://127.0.0.1:8080'))