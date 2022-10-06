function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

mineReadFile('./1.txt').then(value => {
    console.log(value.toString())
}, reason => {
    console.log(reason)
})