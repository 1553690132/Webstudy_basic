// 全局函数模式:将不同的功能封装成不同的全局函数

let msg = 'module1'
function foo() {
    console.log('foo()', msg);
}

function bar() {
    console.log('bar()', msg);
}