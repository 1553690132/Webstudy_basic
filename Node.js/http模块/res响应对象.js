const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    const str = `You request url is ${req.url} and request method is ${req.method}`
    console.log(str)
    res.end(str)
})

server.listen(8080, ()=> console.log('http://127.0.0.1:8080'))