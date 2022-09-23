//导入自定义模块即为自定义对象的module.exports
// const model = require('./module对象')
// const m = require('./exports对象')
// // console.log(model)
// // console.log(model.say())
//
// console.log(model)
// //此时的指向即为重新复制的obj对象
//
// console.log(m)

const ms = require('./dataFormat')
const date = ms.dataFormat(new Date())
console.log(date)