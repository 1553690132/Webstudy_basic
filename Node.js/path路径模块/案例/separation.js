const fs = require('fs')
const path = require('path')

const regCss = /<style>[\s\S]*<\/style>/
const regJs = /<script>[\s\S]*<\/script>/

module.exports = {
    separate
}

function separate(pageName) {
    fs.readFile(path.join(__dirname, `${pageName}.html`), 'utf8', (err, dataStr) => {
        if (err) return console.log(err.message)
        separateCSS(dataStr, pageName)
        separateJS(dataStr, pageName)
        separateHTML(dataStr, pageName)
    })
}

function separateCSS(data, name) {
    let newCss = data.match(regCss)[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, `${name}.css`), newCss, 'utf8', err => {
        if (err) return console.log(err.message)
        console.log('成功分离CSS文件')
    })
}

function separateJS(data, name) {
    let newJs = data.match(regJs)[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, `${name}.js`), newJs, 'utf8', err => {
        if (err) return console.log(err.message)
        console.log('成功分离JS文件')
    })
}

function separateHTML(data, name) {
    let newHtml = data.replace(data.match(regCss)[0], `<link rel="stylesheet" href="${name}.css">`).replace(data.match(regJs)[0], `<script src="${name}.js"></script>`)
    fs.writeFile(path.join(__dirname, `${name}.html`), newHtml, 'utf8', err => {
        if (err) return console.log(err.message)
        console.log('已经成功分离!')
    })
}

