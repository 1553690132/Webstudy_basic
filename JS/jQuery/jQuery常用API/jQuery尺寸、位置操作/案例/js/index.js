$(() => {
    let flag = true;
    // 互斥锁

    toggleTop();

    function toggleTop() {
        if ($(document).scrollTop() >= $('.recommend').offset().top) {
            $('.fixedtool').fadeIn();
            // 滑动到一定距离就出现
        } else {
            $('.fixedtool').fadeOut();
        }
    };

    $(window).scroll(function () {
        toggleTop();
        // 页面一滚动就执行判断
        if (flag) {
            $('.floor .w').each(function (i, ele) {
                if ($(document).scrollTop() > $(ele).offset().top) {
                    // 遍历每一块内容，一旦大于且未点击就改变侧栏样式！
                    $('.fixedtool li').eq(i + 1).addClass('current').siblings().removeClass();
                }
            });
        }
    });

    $('.fixedtool li').click(function () {
        flag = false;
        // 保证点击时不会触发窗口滑动
        const current = $('.floor .w').eq($(this).index()).offset().top;
        // 计算移动距离
        $('html, body').stop().animate({
            scrollTop: current,
        }, () => flag = true);
        // 动画函数内的回调函数打开互斥锁，在滑动动画结束后就开启锁让窗口可以开始滑动判定。
        $(this).addClass('current').siblings().removeClass();
        // 设置排他样式
    });
})