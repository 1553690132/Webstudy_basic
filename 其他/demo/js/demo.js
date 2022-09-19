function cardA() {
    var myTab = document.getElementById("tab");    //整个div
    var myUl = myTab.getElementsByTagName("ul")[0];//一个节点
    var myLi = myUl.getElementsByTagName("li");    //数组
    var myDiv = myTab.getElementsByTagName("div"); //数组

    for (var i = 0; i < myLi.length; i++) {
        myLi[i].index = i;
        myLi[i].onmouseover = function () {
            for (var j = 0; j < myLi.length; j++) {
                myLi[j].className = "off";
                myDiv[j].className = "hide";
            }
            this.className = "on";
            myDiv[this.index].className = "show";
        }
    }
}

window.onload = function () {
    cardA();
}

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 3000,
    speed: 300,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplayDisableOnInteraction: false,
});

function getWindowSize() {
    if (window.matchMedia("(max-width:1135px)").matches) {
        changeClass();
    } else {
        changeBack();
    }
}

function changeClass() {
    document.getElementById('index-bottom').className = 'content_right col-lg-6 col-md-6 col-md-offset-4 col-sm-6 col-xs-6';
}

function changeBack() {
    document.getElementById('index-bottom').className = 'content_right col-lg-6 col-md-6 col-sm-6 col-xs-6';
}

window.onresize = function () {
    getWindowSize();
}