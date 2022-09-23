const express = require('express')
const router = express.Router()

// 挂载响应的路由
router.get('/get', (req, res) => {
    // 获取到客户端发送的数据
    const query = req.query
    res.send({
        status: 0, // 0代表接受成功 1代表失败
        msg: 'GET请求成功!', // 状态的描述
        data: query //需要响应给客户端的数据
    })
})

router.post('/post', (req, res) => {
    // 获取客户端发送请求体，发送到服务器的数据
    const body = req.body

    res.send({
        status: 0,
        msg: 'POST请求成功!',
        data: body
    })
})

module.exports = router