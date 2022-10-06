const express = require('express')
const app = express()
const session = require('express-session')

app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: 'keyboard cat', // secret的值可以为任意字符串
    resave: false, // 固定写法
    saveUninitialized: true // 固定写法
}))

// 向Session存储数据
app.post('/api/post', (req, res) => {
    if (req.body.username !== 'lwh' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败!' })
    }
    // 将登录成功后的用户信息存入Session中
    req.session.user = req.body
    req.session.isLogin = true

    res.send({ status: 0, msg: '登录成功!' })
})

// 从Session中取出数据
app.get('/api/get', (req, res) => {
    if (!req.session.isLogin) {
        return res.send({ status: 1, msg: '未登录' })
    }
    res.send({ status: 0, msg: 'success', username: req.session.user.username })
})

// 清空Session
app.post('/api/logout', (req, res) => {
    req.session.destroy()
    res.send({ status: 0, msg: '退出成功' })
})

app.listen(8080, () => console.log('http://127.0.0.1:8080/api/post'))
