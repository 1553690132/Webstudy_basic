let p1 = Promise.resolve(123)
console.log(p1)
// 返回Promise{123}
let p2 = Promise.resolve(new Promise((resolve, reject) => reject('Error')))
p2.catch(reason => {
    console.log(reason)
    // 对error进行捕获处理
})
console.log(p2)
// 返回 Promise{<rejected> 'Error'}

let p3 = Promise.reject('123')
p3.catch(reason => console.log(reason))
console.log(p3)
// 返回的永远是失败对象