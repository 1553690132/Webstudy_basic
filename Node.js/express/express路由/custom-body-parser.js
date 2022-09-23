const qs = require('querystring')

const bodyParser = (req, res, next) =>{
    let str = ''
    req.on('data', chunk => {
        str += chunk
    })
    req.on('end', () => {
        req.body = str
        next()
    })
}

module.exports = bodyParser