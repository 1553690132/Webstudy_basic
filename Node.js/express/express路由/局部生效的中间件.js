const express = require('express')
const app = express()

const mw = function (req, res, next) {
    console.log('局部中间件')
    next()
}

// 只在该路由生效
app.get('/', mw, (req, res) => {
    res.send('Home Page')
})

// 不生效
app.get('/user', (req, res) => {
    res.send('User Page')
})

app.listen(8080, () => console.log('http://127.0.0.1:8080'))