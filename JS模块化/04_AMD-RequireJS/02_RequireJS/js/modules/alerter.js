// 定义有依赖的模块
define(['dataService', 'jquery'], function (dataService, $) {
    let msg = 'alerter.js'
    function showMeg() {
        console.log(msg, dataService.getName());
    }
    $('body').css('background', 'pink')
    // 暴露模块
    return { showMeg }
});
