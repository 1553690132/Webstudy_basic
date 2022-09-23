const express = require('express')
const app = express()

app.listen(8080, ()=> console.log('http://127.0.0.1:8080'))

app.get('/user', (requu, res) => {
    // 向客户端发送JSON对象
    res.send({name: 'lwh', age: 18})
})

app.post('/user', (req, res) => {
    // 向客户端发送文本内容
    res.send('请求成功！')
})

app.get('/', (req, res)=> {
    // 通过req.query可以获取到客户端发送的参数，默认为空对象!
    console.log(req.query)
    res.send(req.query)
})

app.get('/user/:id', (req, res)=> {
    // req.params是动态匹配的URL参数，默认为空对象
    console.log(req.params)
    res.send(req.params)
})