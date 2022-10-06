const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
app.use(express.urlencoded({ extended: false }))

//  定义secret密钥
const secretKey = 'LWH_LWH_LWH'

// 使用app.use注册中间件
// expressJWT({secret: secretKey}) 用来解析Token的中间件
// .unless({path: [/^\/api\//]}) 用来指定哪些接口不需要访问权限
app.use(expressJWT.expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))


app.post('/api/login', (req, res) => {
    const userinfo = req.body
    if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
        return res.send({
            status: 400,
            message: '登陆失败'
        })
    }

    // 登录成功后调用jwt的sign方法生成jwt字符串，并通过token属性发送给客户端
    const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
    res.send({
        status: 200,
        message: '登陆成功',
        token: tokenStr //发送给客户端的token字符串
    })
})

app.get('/admin/getinfo', (req, res) => {
    console.log(req.auth);
    res.send({
        status: 200,
        message: '获取用户信息成功!',
        data: {
            username: req.auth.username
        }
    })
})

// 捕获Token解析的错误
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({ status: 401, message: '无效的Token' })
    }
    res.send({ status: 500, message: '未知错误' })
})


app.listen(8080, () => console.log('http://127.0.0.1:8080'))