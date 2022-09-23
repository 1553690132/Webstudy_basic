## 安装

```
    npm install hm777_tools
```

## 导入

```js
const hm777 = require('hm777_tools')
```

## 格式化时间

```js
// 调用dateFormat对时间进行格式化
const dateStr = hm777.dateFormat(new Date())
```

## 转义HTML中特殊字符

```js
const htmlStr = '<h1>Hello!&&"World"</h1>'
hm777.htmlEscape(htmlStr)
// 转换结果:&lt;h1&gt;Hello!&amp;&amp;&quot;World&quot;&lt;/h1&gt;
console.log(htmlStr)
```

## 还原HTMl中的特殊字符

```js
// str为待还原的HTML字符串
hm777.htmlUnEscape(str)
// 还原结果:<h1>Hello!&&"World"</h1>
console.log(str)
```

## 开源协议

ISC