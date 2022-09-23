const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('全局中间件!')
    next()
})

app.get('/', (req, res)=> {
    res.send('Home page')
})

app.get('/user', (req, res)=> {
    res.send('user page')
})

app.listen(8080, ()=> console.log('http://127.0.0.1:8080'))