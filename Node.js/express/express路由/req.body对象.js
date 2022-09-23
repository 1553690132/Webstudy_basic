const express = require('express')
const app = express()

// 必须在路由前配置中间件的解析表单格式此处为JSON格式
app.use(express.json())

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.use(express.urlencoded({ extended: false }))

app.post('/pop', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.listen(8080, () => console.log('http://127.0.0.1:8080/'))