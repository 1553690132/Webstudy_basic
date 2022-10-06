// 需求:读取 1 2 3txt文件的内容且拼接在一起

const fs = require('fs')
// 回调函数实现
// fs.readFile('./1.txt', (err, data1) => {
//     if (err) throw err
//     fs.readFile('./2.txt', (err, data2) => {
//         if (err) throw err
//         fs.readFile('./3.txt', (err, data3) => {
//             if (err) throw err
//             console.log(data1 + data2 + data3)
//         })
//     })
// })

const util = require('util')
const mineReadFile = util.promisify(fs.readFile)

// async和 await结合实现
async function main() {
    try {
        let data1 = await mineReadFile('./1.txt')
        let data2 = await mineReadFile('./2.txt')
        let data3 = await mineReadFile('./3.txt')
        console.log(data1 + data2 + data3)
    } catch (e) {
        console.log(e)
    }
}

main()