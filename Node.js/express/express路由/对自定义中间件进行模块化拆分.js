const express = require('express')
const app = express()

const customParser = require('./custom-body-parser.js')

// 将自定义中间件注册为全局中间件
app.use(customParser)

app.post('/user', (req, res)=> {
    res.send(req.body)
})

app.listen(8080, ()=>console.log('ok'))