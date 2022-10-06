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

let age = 18
export { module2_1, module2_2, age }
