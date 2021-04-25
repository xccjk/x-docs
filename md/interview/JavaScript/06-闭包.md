# 闭包

## 什么是闭包

- 闭包其实就是一个可以访问其它函数内部变量的函数
- 从技术的角度讲，所有的JavaScript函数都是闭包：它们都是对象，它们都关联到作用域链
- 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行

```javascript
function foo() {
    var name = 'xcc'
    return function() {
        console.log(name)
    }
}
foo()
var result = foo()
result()    // xcc
```

## 什么时候构成闭包

- 闭包产生的本质：`当前环境中存在指向父级作用域的引用`(案例1)
- 只要父级作用域的引用存在既可(案例2)

案例1中console可以访问到的作用域有func2，func1和window

```javascript
// 案例1
function foo() {
    var name = 'xcc'
    function func2() {
        console.log(name)
    }
    return func2
}
foo()
var result = foo()
result() 
```

```javascript
// 案例2
var func2
function func1() {
    var a = 2
    func2 = function() {
        console.log(a)    // 2
    }
}
```

### 作用域链

- 当访问一个变量时，代码解释器会先在当前作用域中查找，如果没有找到，就去父级作用域去查找，知道找到该变量或者不存在于父作用域中，这个链路就是作用域链

查找过程：`函数func2内部作用域` -> `函数func1作用域` -> `全局作用域`

```javascript
var a = 1
function func1() {
    var b = 2
    function func2() {
        var c = 3
        console.log(a)    // 1
    }
}
```

## 闭包的实现方法

- 在函数内部返回一个函数
- 在定时器、事件监听、ajax请求、web workers或者任何一部中，只要使用了回调函数，实际上就是在使用闭包(案例3)
- 作为函数参数传递的形式(案例4)
- IIFE(立即执行函数)，创建了闭包，保存了全局作用域和当前函数的作用域，因此可以输出全局的变量(案例5)
  - IIFE拥有独立的作用域，不会污染全局作用域

```javascript
// 案例3
// 定时器
setTimeout(function foo() {
    console.log(1)
}, 1000)
// 事件监听
$('#app').click(function() {
    console.log('event')
})
```

```javascript
// 案例4
var a = 1
function foo() {
    var a = 2
    function baz() {
        console.log(a)
    }
    bar(baz)
}

function bar(fn) {
    // 闭包
    fn()
}
foo()
```

```javascript
// 案例5
var name = 'xcc'
(function foo() {
    console.log(name)    // xcc
})()
```

## 闭包的优缺点

### 优点

- 局部作用域
- 减少全局变量污染

### 缺点

- 由于闭包会使一些变量一直保存在内存中不会自动释放，所以如果大量使用的话会消耗大量内存，在IE9之前闭包会导致内存泄漏

## 经典问题

案例5中，console.log会打印出5个6出来，如果想实现输出1、2、3、4、5、6应该怎么办？

```javascript
// 案例6
for(var i = 1; i < 6; i++) {
    setTimeout(function () {
     console.log(i)    // 5
    }, 0)
}
```

- setTimeout为宏任务，由于JavaScript中单线程eventLoop机制，在主线程同步执行完后才会去执行宏任务，因此循环结束后setTimeout中回调才依次执行
- 因为setTimeout函数也是一种闭包，往上找它的父级作用域就是window，变量i为window上的全局变量

### IIFE

```javascript
for(var i = 1; i < 6; i++) {
    (function(j) {
        setTimeout(function () {
         console.log(j)    // 1、2、3、4、5
        }, 0)
    })(i)
}
```

### let块级作用域

```javascript
for(let i = 1; i < 6; i++) {
    setTimeout(function () {
      console.log(i)    // 1、2、3、4、5
    }, 0)
}
```

### 定时器传入第三个参数

```javascript
for(let i = 1; i < 6; i++) {
    setTimeout(function (j) {
      console.log(j)    // 1、2、3、4、5
    }, 0, i)
}
```

## 参考资料

- [JavaScript查看更多文章](https://github.com/xccjk/x-blog)
- [闭包详解一](https://juejin.cn/post/6844903612879994887#heading-3)
- [JavaScript深入之闭包](https://github.com/mqyqingfeng/Blog/issues/9)
