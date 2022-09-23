//导入fs模块 操作文件
const fs = require('fs');

//调用fs.readFile方法读取文件
//参数1:文件存放路径
//参数2:读取文件的编码格式,一般是utf8
//参数3:回调函数,拿到读取失败和成功的结果:err和dataStr
fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    //失败结果
    console.log(err)
    //成功结果
    console.log(dataStr);
});
//读取成功err为null dataStr为文件内容
//读取失败err为错误对象 dataStr为undefined