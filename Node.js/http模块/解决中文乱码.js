const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    const str = `您的url为:${req.url}您的请求方式为:${req.method}`
    res.setHeader('Content-Type', 'text/html;charset=utf-8') //解决乱码
    console.log(str)
    res.end(str)
})

server.listen(8080, () => console.log('server running at http://127.0.0.1:8080'))