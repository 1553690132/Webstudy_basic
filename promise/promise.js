// 声明构造函数
function Promise(executor) {
    // 添加promiseState和promiseResult属性
    this.promiseState = 'pending'
    this.promiseResult = null
    // 声明属性保存异步函数
    this.callbacks = []
    const that = this
    // 保存this值
    // 使用箭头函数，this指向为上一层即 Promise对象
    const resolve = data => {
        // 由于 Promise的状态只能改变一次，且只能由初态 pending改变故判断
        if (this.promiseState !== 'pending') return;
        this.promiseState = 'fulfilled'
        this.promiseResult = data
        // 状态改变不能直接调用回调函数，故设置定时器异步
        setTimeout(() => {
            this.callbacks.forEach(e => {
                e.onResolved()
            })
        });
    }

    // 普通函数 this指向为调用者即 window故故需要另外保存
    function reject(data) {
        // 由于 Promise的状态只能改变一次，且只能由初态 pending改变故判断
        if (that.promiseState !== 'pending') return;
        // 1.修改对象状态(promiseState)
        that.promiseState = 'rejected'
        // 2.设置对象结果值(promiseResult)
        that.promiseResult = data
        setTimeout(() => {
            that.callbacks.forEach(e => {
                e.onRejected()
            })
        });
    }

    // 用于捕获 throw改变状态
    try {
        // 同步调用 执行器函数
        executor(resolve, reject)
    } catch (e) {
        // 直接对throw进行获取改变
        reject(e)
    }

}

// 添加 then方法
Promise.prototype.then = function (onResolved, onRejected) {
    const self = this
    // 判断回调函数参数:实现异常穿透
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason
        }
    }
    // 若首个then方法无参数：则需指定一个自定义返回
    if (typeof onResolved !== 'function') {
        onResolved = value => value
    }

    // then方法返回的是Promise对象
    return new Promise((resolve, reject) => {
        try {
            // 封装函数
            function callback(type) {
                try {
                    // 需要将this改变为上次保存的promise对象。这里直接使用this会指向window
                    let results = type(self.promiseResult)
                    if (results instanceof Promise) {
                        results.then(v => {
                            resolve(v)
                        }, r => {
                            reject(r)
                        })
                    } else {
                        resolve(results)
                    }
                } catch (e) {
                    reject(e)
                }
            }

            // try-catch捕获then方法中抛出异常的情况
            // 调用函数前先进行判断此时的状态promiseState
            if (this.promiseState === 'fulfilled') {
                // 转化为异步任务
                setTimeout(() => {
                    callback(onResolved)
                });
            }
            if (this.promiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected)
                });
            }
            // 状态为pending则此时为异步任务
            if (this.promiseState === 'pending') {
                // 保存回调函数
                // 实现异步then
                this.callbacks.push({
                    onResolved: function () {
                        try {
                            // 此时的 this指向为对象则需设置值保存promise对象的this即self
                            let results = onResolved(self.promiseResult)
                            if (results instanceof Promise) {
                                results.then(v => {
                                    resolve(v)
                                }, r => {
                                    reject(r)
                                })
                            } else {
                                resolve(results)
                            }
                        }
                        catch (e) {
                            reject(e)
                        }
                    },
                    onRejected: function () {
                        try {
                            let results = onRejected(self.promiseResult)
                            if (results instanceof Promise) {
                                results.then(v => {
                                    resolve(v)
                                }, r => {
                                    reject(r)
                                })
                            } else {
                                reject(results)
                            }
                        } catch (e) {
                            reject(e)
                        }
                    }
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

// 添加 catch方法
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
}

// 添加 resolve方法
Promise.resolve = function (value) {
    // 返回promise对象
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(v => {
                resolve(v)
            }, r => {
                reject(r)
            })
        } else {
            // 状态设置为成功
            resolve(value)
        }
    })
}

// 添加 reject方法
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}

// 添加 all方法
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        // 设置数组存储各promise的data
        let count = 0;
        // 设置计数器判断全真情况
        // 遍历promises数组
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                if (count === promises.length) {
                    resolve(arr)
                }
                count++
                arr[i] = promises[i]
                // 这里不使用push加入是因为promise的执行时间长短不同可能会导致顺序不同
            }, r => {
                reject(arr)
            })
        }
    })
}

// 添加 race方法
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                resolve(v)
            }, r => {
                reject(r)
            })
        }
    })
}

// class版本
class Promise {
    constructor(executor) {
        // 添加promiseState和promiseResult属性
        this.promiseState = 'pending'
        this.promiseResult = null
        // 声明属性保存异步函数
        this.callbacks = []
        const that = this
        // 保存this值
        // 使用箭头函数，this指向为上一层即 Promise对象
        const resolve = data => {
            // 由于 Promise的状态只能改变一次，且只能由初态 pending改变故判断
            if (this.promiseState !== 'pending') return;
            this.promiseState = 'fulfilled'
            this.promiseResult = data
            // 状态改变不能直接调用回调函数，故设置定时器异步
            setTimeout(() => {
                this.callbacks.forEach(e => {
                    e.onResolved()
                })
            });
        }

        // 普通函数 this指向为调用者即 window故故需要另外保存
        function reject(data) {
            // 由于 Promise的状态只能改变一次，且只能由初态 pending改变故判断
            if (that.promiseState !== 'pending') return;
            // 1.修改对象状态(promiseState)
            that.promiseState = 'rejected'
            // 2.设置对象结果值(promiseResult)
            that.promiseResult = data
            setTimeout(() => {
                that.callbacks.forEach(e => {
                    e.onRejected()
                })
            });
        }

        // 用于捕获 throw改变状态
        try {
            // 同步调用 执行器函数
            executor(resolve, reject)
        } catch (e) {
            // 直接对throw进行获取改变
            reject(e)
        }

    }

    then(onResolved, onRejected) {
        const self = this
        // 判断回调函数参数:实现异常穿透
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason
            }
        }
        // 若首个then方法无参数：则需指定一个自定义返回
        if (typeof onResolved !== 'function') {
            onResolved = value => value
        }

        // then方法返回的是Promise对象
        return new Promise((resolve, reject) => {
            try {
                // 封装函数
                function callback(type) {
                    try {
                        // 需要将this改变为上次保存的promise对象。这里直接使用this会指向window
                        let results = type(self.promiseResult)
                        if (results instanceof Promise) {
                            results.then(v => {
                                resolve(v)
                            }, r => {
                                reject(r)
                            })
                        } else {
                            resolve(results)
                        }
                    } catch (e) {
                        reject(e)
                    }
                }

                // try-catch捕获then方法中抛出异常的情况
                // 调用函数前先进行判断此时的状态promiseState
                if (this.promiseState === 'fulfilled') {
                    // 转化为异步任务
                    setTimeout(() => {
                        callback(onResolved)
                    });
                }
                if (this.promiseState === 'rejected') {
                    setTimeout(() => {
                        callback(onRejected)
                    });
                }
                // 状态为pending则此时为异步任务
                if (this.promiseState === 'pending') {
                    // 保存回调函数
                    // 实现异步then
                    this.callbacks.push({
                        onResolved: function () {
                            try {
                                // 此时的 this指向为对象则需设置值保存promise对象的this即self
                                let results = onResolved(self.promiseResult)
                                if (results instanceof Promise) {
                                    results.then(v => {
                                        resolve(v)
                                    }, r => {
                                        reject(r)
                                    })
                                } else {
                                    resolve(results)
                                }
                            }
                            catch (e) {
                                reject(e)
                            }
                        },
                        onRejected: function () {
                            try {
                                let results = onRejected(self.promiseResult)
                                if (results instanceof Promise) {
                                    results.then(v => {
                                        resolve(v)
                                    }, r => {
                                        reject(r)
                                    })
                                } else {
                                    reject(results)
                                }
                            } catch (e) {
                                reject(e)
                            }
                        }
                    })
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
    // 加static代表属于类而不属于实例对象
    static resolve(value) {
        // 返回promise对象
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            } else {
                // 状态设置为成功
                resolve(value)
            }
        })
    }

    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            let arr = []
            // 设置数组存储各promise的data
            let count = 0;
            // 设置计数器判断全真情况
            // 遍历promises数组
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    if (count === promises.length) {
                        resolve(arr)
                    }
                    count++
                    arr[i] = promises[i]
                    // 这里不使用push加入是因为promise的执行时间长短不同可能会导致顺序不同
                }, r => {
                    reject(arr)
                })
            }
        })
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            }
        })
    }
}