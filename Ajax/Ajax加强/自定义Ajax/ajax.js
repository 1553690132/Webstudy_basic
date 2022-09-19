/**
 * 处理data参数
 * @param{data} 需要发送到服务器的数据
 * @returns{string} 返回拼接好的查询字符串
 */
function resolveData(data) {
    const arr = [];
    for (let k in data) {
        arr.push(k + '=' + data[k]);
    }
    return arr.join('&');
}

// 处理成功的回调函数和与服务器连接
function ajax(options) {
    let xhr = new XMLHttpRequest();
    // 拼接查询字符串
    let qs = resolveData(options.data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 服务器返回数据反序列化为对象，再利用success实现回调
            let res = JSON.parse(xhr.responseText);
            options.success(res);
        }
    }

    // 判断类型
    let type = options.method.toUpperCase();
    if (type === 'GET') {
        xhr.open(type, options.url + '?' + qs);
        xhr.send();
    } else if (type === 'POST') {
        xhr.open(type, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs);
    }
}