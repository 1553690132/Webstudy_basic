const fs = require('fs');

//参数1:文件存放路径
//参数2:写入内容
//参数3:回调函数
fs.writeFile('./files/2.txt', 'Hello World!', 'utf8', function (err) {
    //写入成功err值为null、写入失败则为错误对象
    console.log(err);
})
