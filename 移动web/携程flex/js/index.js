window.addEventListener('load', () => {
    let index = 0;
    let focus_part = document.querySelector('.focus');
    let ul = focus_part.children[0];
    let focusWidth = focus_part.offsetWidth;
    let ol = document.querySelector('ol');
    let timer = setInterval(() => {
        index++;
        let translatex = -index * focusWidth;
        ul.style.transition = 'all .3s';
        ul.style.transform = `translateX(${translatex}px)`;
    }, 1500);

    ul.addEventListener('transitionend', () => {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            // 利用最新索引去进行滚动
            let translatex = -index * focusWidth;
            ul.style.transform = `translateX(${translatex}px)`;
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            let translatex = -index * focusWidth;
            ul.style.transform = `translateX(${translatex}px)`;
        }
        changeCircle();
    });
    // 无缝滚动 

    function changeCircle() {
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    };

    let startX = 0;
    let moveX = 0;
    let swithes = false;
    // 节流阀
    ul.addEventListener('touchstart', (e) => {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });

    ul.addEventListener('touchmove', (ez) => {
        moveX = ez.targetTouches[0].pageX - startX;
        let translatex = -index * focusWidth + moveX;
        ul.style.transition = 'none';
        ul.style.transform = `translateX(${translatex}px)`;
        swithes = true;
        ez.preventDefault();
    });

    ul.addEventListener('touchend', () => {
        if (swithes) {
            if (Math.abs(moveX) > 70) {
                index = moveX > 0 ? index - 1 : index + 1;
            }
            let translatex = -index * focusWidth;
            ul.style.transition = 'all .3s';
            ul.style.transform = `translateX(${translatex}px)`;
            clearInterval(timer);
            // 保证只有一个定时器存在
            timer = setInterval(() => {
                index++;
                let translatex = -index * focusWidth;
                ul.style.transition = 'all .3s';
                ul.style.transform = `translateX(${translatex}px)`;
            }, 1500);
            swithes = false;
        }
    });

    let goBack = document.querySelector('.goBack');
    let nav = document.querySelector('nav');

    window.addEventListener('scroll', ()=> {
        if(window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });

    goBack.addEventListener('click', ()=> {
        window.scroll(0, 0);
    })
});