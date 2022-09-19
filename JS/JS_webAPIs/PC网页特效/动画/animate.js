function animations(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        let len = target - obj.offsetLeft;
        let step = len > 0 ? Math.ceil(len / 10) : Math.floor(len / 10);
        // 将步长值转化为整数,防止误差.
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}