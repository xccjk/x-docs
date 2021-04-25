# 数据类型判断，怎么判断Array类型，怎么判断变量是Number类型

## 数据类型判断的几种方式

### typeof

- typeO主要用来对基本数据类型进行判断

```javascript
typeof 10 // number
typeof 'xcc'    // string
typeof undefined    // undefined
typeof null    // object
typeof false    // boolean
typeof Symbol()    // symbol
typeof Bigint(10)    // bigint
typeof {}    // object
typeof []    // object
typeof function(){}    // function
typeof /test/     // object
typeof new Date()    // object
```

### instanceof

- instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
- 对于基本数据类型，不存在原型，调用instanceof方法会报错

```javascript
console.log([] instanceof Array)    // true
console.log({} instanceof Array)    // false
console.log({} instanceof Object)     // true
console.log(/test/ instanceof Object)    // true

// 基本类型
console.log(10 instanceof [])    // Right-hand side of 'instanceof' is not callable
console.log(false instanceof [])    // Right-hand side of 'instanceof' is not callable
```

### Object.prototype.toString

```javascript
const toString = Object.prototype.toString
toString.call(1)    // [object Number]
toString.call('xcc')    // [object String]
toString.call(false)    // [object Boolena]
toString.call(null)    // [object Null]
toString.call(undefined)    // [object Undefined]
toString.call(Symbol(1))    // [object Symbol]
toString.call(BigInt(10))    // [object BigInt]
toString.call([])    // [object Array]
toString.call({})    // [object Object]
toString.call(function(){})    // [object Function]
toString.call(/test/)    // [object RegExp]
```

## 怎么判断Array类型，怎么判断变量是Number类型

### Array

```javascript
// 方式1
console.log([] instanceof Array)    // true
// 方式2
const toString = Object.prototype.toString
toString.call([])    // [object, Array]
// 方式3
console.log(Array.isArray([]))    // true
```

### number

```javascript
// 方式1
typeof 10    // number
// 方式2
const toString = Object.prototype.toString
toString.apply(10)    // [object, Number]
// 方式3
typeof 10 === 'number' && isNaN(10)
```
