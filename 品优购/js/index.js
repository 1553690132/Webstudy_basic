window.addEventListener('load', () => {
    let lefts = document.querySelector('.arrow-l');
    let rights = document.querySelector('.arrow-r');
    let focus_p = document.querySelector('.focus');
    let imgs = document.querySelector('.imgs')
    let circle = document.querySelector('.circle');
    let imgWidth = focus_p.clientWidth;
    focus_p.addEventListener('mousemove', () => {
        lefts.style.display = 'block';
        rights.style.display = 'block';
        clearInterval(timer);
        timer = null;
        // 清除定时器
    });

    focus_p.addEventListener('mouseout', () => {
        lefts.style.display = 'none';
        rights.style.display = 'none';
        timer = setInterval(() => {
            rights.click();
        }, 1500)
    });

    let num = 0;
    let flag = 0;
    // num为图片号，flag为底部li值

    for (let i = 0; i < imgs.children.length; i++) {
        let li = document.createElement('li');
        li.setAttribute('index', i);
        circle.appendChild(li);
        // 动态生成底部li
        li.addEventListener('click', function () {
            for (let j = 0; j < circle.children.length; j++) {
                circle.children[j].className = '';
            }
            this.className = 'current';
            animations(imgs, -imgWidth * this.getAttribute('index'));
            // 图片切换
            num = this.getAttribute('index');
            flag = this.getAttribute('index');
            // 给当前点击的li设置num和flag防止转换bug
        });
    }
    circle.children[0].className = 'current';
    // 初始化完成

    let first = imgs.children[0].cloneNode(true);
    // 克隆第一个元素放在最后保证无缝转换的功能
    imgs.appendChild(first);

    let switchs = true;
    // 节流阀

    rights.addEventListener('click', () => {
        if (switchs) {
            switchs = false;
            if (num === imgs.children.length - 1) {
                imgs.style.left = 0;
                num = 0;
                // 当前达到最后一位时，清空num值，并使图片复原第一张
            }
            num++;
            animations(imgs, -num * imgWidth, () => {
                switchs = true;
            });
            // 回调函数开启节流阀，保证在动画执行完毕后才能进行下一步操作。
            flag++;
            if (flag === imgs.children.length - 1) flag = 0;
            change();
            // 底部li达到最后时同样也复原并定位到第一点    
        }
    })


    lefts.addEventListener('click', () => {
        if (switchs) {
            switchs = false;
            if (num === 0) {
                num = imgs.children.length - 1;
                imgs.style.right = -num * imgWidth + 'px';
            }
            num--;
            // 目前达到第一位时转换到最后
            animations(imgs, -num * imgWidth, () => {
                switchs = true;
            });
            flag--;
            if (flag < 0) flag = imgs.children.length - 2;
            change();
        }
    })

    function change() {
        for (let i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[flag].className = 'current';
    }
    // 底部li的转换

    let timer = setInterval(() => {
        rights.click();
        // 手动调用点击事件
    }, 1500);
});
