// 自定义模板引擎
function template(id, data) {
    let str = document.getElementById(id).innerHTML;
    const pattern = /{{\s*([a-zA-Z]+)\s*}}/;
    let res = null;
    while (res = pattern.exec(str)) {
        str = str.replace(res[0], data[res[1]]);
    }
    return str;
}