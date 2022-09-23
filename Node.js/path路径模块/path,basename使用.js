const path = require('path')
const fpath = '/a/b/c/index.html'

console.log(path.basename(fpath)) // index.html

console.log(path.basename(fpath, '.html')) // index