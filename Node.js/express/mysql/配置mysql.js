// 导入mysql模块
const mysql = require('mysql')

// 建立连接
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 ip地址
    user: 'root',  // 数据库账号
    password: 'nmsl4599', // 数据库密码
    database: 'sys' // 要操作的数据库
})


db.query('SELECT 1', (err, results) => {
    if (err) return console.log(err.message);
    console.log(results);
})

// 查询
db.query('select * from seven', (err, results) => {
    console.log(results);
})

const sqlStr = 'select * from stuinfo'
db.query(sqlStr, (err, results) => {
    console.log(results)
})

// 插入
const user = {name: 'lwh', content: 'Nice!'}
const sqlStr2 = 'insert into seven(name, content) values (?, ?)'
db.query(sqlStr2, [user.name, user.content], (err, results) => {
    if (err) return console.log(err.message)
    else if (results.affectedRows === 1) console.log('插入成功!')
})

// 插入便捷方式
const user2 = {name: 'lwhs', content: 'apple'}
const sqlStr3 = 'insert into seven set ?'
db.query(sqlStr3, user2, (err, results) => {
    if (err) return console.log(err.message)
    else if (results.affectedRows === 1) console.log('插入成功!')
})

// 更新操作
const user3 = {id: 1, name: 'lll', content: 'abc'}
const sqlStr4 = 'update seven set name=?,content=? where id=?'
db.query(sqlStr4, [user3.name, user3.content, user3.id], (err, results) => {
    if (err) return console.log(err.message)
    else if (results.affectedRows === 1) return console.log('更新成功！')
})

// 更新便捷操作
const user4 = {id: 4, name: 'sac', content: 'quite'}
const sqlStr5 = 'update seven set ? where id=?'
db.query(sqlStr5, [user4, user4.id], (err, results) => {
    if (err) return console.log(err.message)
    else if (results.affectedRows === 1) console.log('更新成功！')
})

// 删除数据
const sqlStr6 = 'delete from seven where id=?'
db.query(sqlStr6, 7, (err, results) => {
    if (err) return console.log(err.message)
    else if (results.affectedRows === 1) console.log('删除成功！')
})
