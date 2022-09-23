const dateFormat = require('./dateFormat')
const htmlEscape = require('./htmlEscape')

module.exports = {
    ...dateFormat,
    ...htmlEscape,
}

//使用展开运算符则之后调用可以直接使用函数，不需要以对象的格式调用！

console.log(htmlEscape.htmlEscape('<h1>Hello!&&"World"</h1>'))

