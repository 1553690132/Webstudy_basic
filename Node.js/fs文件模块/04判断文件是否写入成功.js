const fs = require('fs')

fs.writeFile('./files/2.txt', 'Hello!', 'utf8', function (err) {
    if (err) {
        console.log('文件写入失败:' + err.message)
    } else {
        console.log('写入成功！')
    }
})