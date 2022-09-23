const fs = require('fs')
const path = require('path')

const reg1 = /<style>[\s\S]*<\/style>/
const reg2 = /<script>[\s\S]*<\/script>/


fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function (err, dataStr) {
    if (err) return console.log(err.message)
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(data) {
    let cssValue = data.match(reg1)[0]
    cssValue = cssValue.replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, '/index.css'), cssValue, 'utf8', err=>{
        if (err) return console.log(err.message)
        console.log('已写入index.css文件！')
    })
}

function resolveJS(data) {
    let jsValue = data.match(reg2)[0]
    jsValue = jsValue.replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, '/index.js'), jsValue, 'utf8', err => {
        if (err) return console.log(err.message)
        console.log('已写入index.js文件！')
    })
}

function  resolveHTML(data) {
    let htmlValue = data.replace(data.match(reg1)[0], '<link rel="stylesheet" href="index.css">').replace(data.match(reg2)[0], '<script src="index.js"></script>')
    fs.writeFile(path.join(__dirname, 'index.html'), htmlValue, 'utf8', err=>{
        if (err) return console.log(err.message)
        console.log('已成功改写index.html文件！')
    })
}