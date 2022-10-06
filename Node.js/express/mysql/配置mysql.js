// 导入mysql模块
const mysql = require('mysql')

// 建立连接
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 ip地址
    user: 'root',  // 数据库账号
    password: 'nmsl4599', // 数据库密码
    database: 'sys' // 要操作的数据库
})


db.query('SELECT 1', (err, result) => {
    if(err) return console.log(err.message);
    console.log(result);
})

db.query('select * from seven', (err, result) => {
    console.log(result);
})