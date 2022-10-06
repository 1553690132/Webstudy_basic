(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.module1_1 = module1_1;
exports.module1_2 = module1_2;

// // 暴露模块 分别暴露
// export function foo() {
//     console.log('foo() module1');
// }
// export function bar() {
//     console.log('bar() module1');
// }
function module1_1() {
  console.log('hello1_1');
}

function module1_2() {
  console.log('hello1_2');
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.age = void 0;
exports.module2_1 = module2_1;
exports.module2_2 = module2_2;

// // 统一暴露
// function fun() {
//     console.log('module2');
// }
// function fun2() {
//     console.log('module2');
// }
// // 暴露整个对象
// export { fun, fun2 }
function module2_1() {
  console.log('2_1');
}

function module2_2() {
  console.log('2_2');
}

var age = 18;
exports.age = age;
},{}]},{},[1]);
