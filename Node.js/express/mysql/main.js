const express = require('express')
const app = express()

const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'nmsl4599',
    database: 'sys'
})

// db.query('select * from seven', (err, results) => {
//     if (err) return console.log(err.message)
//     console.log(results)
// })

// const user1 = {name:'123', content:'123'}
// const sqlStr1 = 'insert into seven set ?'
// db.query(sqlStr1, user1, (err, res)=>{
//     if(err) return console.log(err.message)
//     else if(res.affectedRows === 1) console.log(res);
// })
