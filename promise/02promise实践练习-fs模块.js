const fs = require('fs')

// 回调函数形式
fs.readFile(('./1.txt'), (err, data) => {
    if (err) throw err
    console.log(data.toString());
})

// Promise形式
const p = new Promise((resolve, reject) => {
    fs.readFile('./12.txt', (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})
p.then(value => {
    console.log(value.toString());
}, reason => {
    throw reason
})
