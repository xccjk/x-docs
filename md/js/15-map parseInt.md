# map parseInt

> ['1', '2', '3'].map(parseInt)

## map函数

```javascript
function fn(a, b) {
  console.log([a, b]) // [1, 0]   [2, 1]   [3, 2]
}
[1, 2, 3].map(fn)
```

## parseInt函数

- parseInt(string, radix)解析一个字符串并返回指定基数的十进制整数
- radix 是2-36之间的整数，表示被解析字符串的基数
- 当radix为0时，会安装十进制来解析
- 如果字符串的第一个字符不能被转换为数字，就返回NaN

```javascript
parseInt('1', 0)  // radix为0，按照十进制解析，值为1
parseInt('2', 1)  // radix为1，超出区间范围，返回NaN
parseInt('3', 2)  // radix为2，应该以0或1开头，返回NaN
```
