$(function () {

    $('.checkall').change(function () {
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    });
    // 全选框全选事件

    $('.j-checkbox').change(function () {
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
    });
    // 其余选择框全选则全选框也需选择

    $('.increment').click(function () {
        let n = $(this).siblings('.itxt').val();
        let price = $(this).parents('.p-num').siblings('.p-price').html();
        n++;
        $(this).siblings('.itxt').val(n);
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (price.substr(1) * n).toFixed(2));
        getSum();
    });
    // 增加

    $('.decrement').click(function () {
        let n = $(this).siblings('.itxt').val();
        let price = $(this).parents('.p-num').siblings('.p-price').html();
        n = n > 1 ? --n : 1;
        $(this).siblings('.itxt').val(n);
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (price.substr(1) * n).toFixed(2));
        getSum();
    });
    // 减少

    $('.itxt').change(function () {
        let n = $(this).val();
        n = n > 1 ? n : 1;
        $(this).val(n);
        let price = $(this).parents('.p-num').siblings('.p-price').html();
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (price.substr(1) * n).toFixed(2))
        getSum();
    });
    // 文本框增加减少

    function getSum() {
        let count = 0;
        let money = 0;
        $('.itxt').each(function (i, ele) {
            count += +$(ele).val();
            money += +($(ele).parents('.p-num').siblings('.p-sum').text()).substr(1);
        })
        $('.amount-sum em').text(count);
        $('.price-sum em').text('￥' + money.toFixed(2));
    }
    // 计算总量

    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove();
        getSum();
    });

    $('.remove-batch').click(function () {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    });

    $('.clear-all').click(function () {
        $('.cart-item').remove();
        getSum();
    });
    // 删除



})