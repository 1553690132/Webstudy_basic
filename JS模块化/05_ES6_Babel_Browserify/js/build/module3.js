"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// 默认暴露 可以暴露任意数据类型 暴露数据就是接收的数据
// export default value
// 通过对象方式 暴露多个数据
var _default = {
  name: 'lwh',
  foo: function foo() {
    console.log('默认暴露的箭头函数');
  }
};
exports["default"] = _default;