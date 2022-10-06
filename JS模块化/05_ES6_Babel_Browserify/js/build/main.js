"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

// // 引入其他模块
// // 语法：import xxx from ‘路径’
// // 常规的暴露必须使用解构赋值的方式引用
// import { foo, bar } from './module1'
// import { fun, fun2 } from './module2'
// // 默认暴露直接引入
// import module3 from './module3'
// import $ from 'jquery'
// $('body').css('background', 'green')
// foo()
// bar()
// fun()
// fun2()
// console.log(module3);
(0, _module.module1_1)();
(0, _module.module1_2)();
(0, _module2.module2_1)();
(0, _module2.module2_2)();
console.log(_module2.age);