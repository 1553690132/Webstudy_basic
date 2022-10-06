(function () {
    requirejs.config({
        baseUrl: 'js/',
        // 基本路径
        paths: {
            dataService: './modules/dataService',
            alerter:'./modules/alerter',
            jquery:'./libs/jquery.min'
        }
        // 配置路径
        // 最终寻找路径为: 基本路径 + 配置路径
    })


    requirejs(['alerter'], function (alerter) {
        alerter.showMeg()
    })
})()