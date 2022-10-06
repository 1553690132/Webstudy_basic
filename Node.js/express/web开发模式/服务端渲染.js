const express = require('express')
const app = express()

app.get('/index.html', (req, res) => {
    // 要渲染的数据
    const user = {name:'lwh', age:'18'}
    // 服务器通过字符串拼接，动态生成HTML页面内容
    const htmlStr = `My name is ${user.name} and age is ${user.age}!`
    // 服务器将生成的页面响应给客户端，客户拿到的即真实数据
    res.send(htmlStr)
})