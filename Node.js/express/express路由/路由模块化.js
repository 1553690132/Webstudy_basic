const express = require('express')
const userRouter = require('./router')
const app = express()

app.use(userRouter)
// app.use用于注册全局中间件

app.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})