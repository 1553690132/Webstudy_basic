const http = require('http')

const server = http.createServer()
// req是请求对象，包含了客户端相关的属性和数据
server.on('request', (req, res) => {
    console.log(req.url) // '/'
    console.log(req.method) // GET
})

server.listen(8080, () => console.log('server running at http://127.0.0.1:8080'))