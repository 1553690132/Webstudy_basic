const { log } = require('console')
const express = require('express')
const app = express()
const qs = require('querystring')

// 定义中间件:解析表单数据的中间件
app.use((req, res, next) => {
    // 1.空字符串存储客户端发送数据
    let str = ''
    // 2.监听req的data事件拼接客户端发送数据c
    req.on('data', chunk => {
        str += chunk
    })
    // 3.监听req的end事件，此时str为完整的请求体数据
    req.on('end', () => {
        // TODO:把字符串格式的数据解析成对象格式
        const body = qs.parse(str)
        // 为req的body挂载解析后的属性值
        req.body = body
        console.log(req.body);
        next()
        // 调用next传递信息给后续业务逻辑
    })
})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(8080, () => console.log('success'))