// 默认暴露 可以暴露任意数据类型 暴露数据就是接收的数据
// export default value
// 通过对象方式 暴露多个数据
export default {
    name: 'lwh',
    foo() {
        console.log('默认暴露的箭头函数');
    }
}
