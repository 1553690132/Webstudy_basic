const path = require('path')
const fs = require('fs')

console.log(__dirname)
fs.readFile(path.join(__dirname, '../fs文件模块/files/1.txt'), 'utf8', (err, dataStr) => {
    if (err) console.log(err.message)
    else console.log(dataStr)
})