const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    let fpath = ''
    fpath = url === '/' ? path.join(__dirname, './clock/index.html') : path.join(__dirname, './clock', url)
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end(err.message + '404 Not Found')
        res.end(dataStr)
    })
})

server.listen(8080, () => console.log('http://127.0.0.1:8080'))