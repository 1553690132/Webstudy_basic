console.log(module)

const obj = {
    uname: 'lwh',
    age: '18'
}

module.exports.obj = obj;

module.exports.say = function () {
    return console.log('test')
}

module.exports = obj