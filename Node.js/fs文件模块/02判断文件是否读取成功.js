
const fs = require('fs');

fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        console.log('读取失败！' + err.message);
    } else {
        //如果err不报错则是null可以转化为布尔值即false
        console.log('读取成功！' + dataStr);
    }
})