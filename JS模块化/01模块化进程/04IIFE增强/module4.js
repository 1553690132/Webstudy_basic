// IIFE模式增强---引入依赖
(function (window, $) {
    let msg = 'module4'
    function foo() {
        console.log('foo()', msg);
    }
    window.module4 = foo
    $('body').css('background', 'blue')
    // 依赖注入
})(window, jQuery)