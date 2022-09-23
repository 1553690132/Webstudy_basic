const http = require('http')
const express = require('express')
const server = http.createServer()
const app = express()

server.on('request', (req, res) => {
    res.end('server')
})
server.listen('8080', () => console.log('http://127.0.0.1:8080'))