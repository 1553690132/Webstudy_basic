const express = require('express')
const app = express()

const mw1 = function (req, res, next) {
    console.log('局部中间件1')
    next()
}

const mw2 = function (req, res, next) {
    console.log('局部中间件2')
    next()
}

app.get('/', mw1, mw2, (req, res) => {
    res.send('Home Page')
})

app.get('/user', [mw1, mw2], (req, res) => {
    res.send('User Page')
})

app.listen(8080, () => console.log('http://127.0.0.1:8080'))