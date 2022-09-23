const fs = require('fs')

fs.readFile('./files/成绩-ok.txt', 'utf8', function (err, dataStr) {
    if (err) {
        console.log('读取失败!')
    } else {
        dataStr = dataStr.replaceAll('=', ':')
        fs.writeFile('./files/成绩-ok.txt', dataStr, 'utf8', function (err) {
            if (err) {
                console.log('写入失败' + err.message)
            } else {
                console.log('写入成功! ' + dataStr)
            }
        })
    }
})