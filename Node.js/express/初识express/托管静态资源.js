const express = require('express')
const app = express()

app.listen(8080, (req, res) => {
    //可以访问到image下的静态资源
    app.use(express.static('../express'))
    console.log(212133)
    console.log('http://127.0.0.1:8080')
})