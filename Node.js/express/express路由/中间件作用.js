const express = require('express')
const app = express()

app.use((req, res, next) => {
    // 获取到请求到达服务器的时间
    const time = Date.now()
    // 为req挂载自定义属性，把时间共享给后面所有路由
    req.startTime = time
    console.log('全局中间件!')
    next()
})

app.get('/', (req, res) => {
    console.log(req.startTime)
    res.send('Home page')
})

app.get('/user', (req, res) => {
    console.log(req.startTime)
    res.send('user page')
})

app.listen(8080, () => console.log('http://127.0.0.1:8080'))