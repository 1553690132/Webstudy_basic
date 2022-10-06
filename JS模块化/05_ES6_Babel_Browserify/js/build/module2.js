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