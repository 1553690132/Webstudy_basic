const fs = require('fs')

fs.readFile(__dirname+'/files/1.txt', 'utf8', (err, dataStr)=> {
    console.log(dataStr)
})