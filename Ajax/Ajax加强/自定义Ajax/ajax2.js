function fixData(data) {
    // 把data处理成查询字符串形式
    const res = [];
    for (const k in data) {
        res.push(k + '=' + data[k])
    }
    return res.join('&');
}

function ajax(obj) {
    const data = fixData(obj.data);
    const xhr = new XMLHttpRequest();
    if (obj.method.toUpperCase() === 'GET') {
        xhr.open(obj.method, obj.url + '?' + data);
        xhr.send();
    } else if (obj.method.toUpperCase() === 'POST') {
        xhr.open(obj.method, obj.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            if (res.status === 200) {
                obj.success(res);
            }
        }
    }
}