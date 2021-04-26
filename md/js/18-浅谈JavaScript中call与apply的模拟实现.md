# 浅谈JavaScript中call与apply的模拟实现

## call

call()方法是使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法

语法：

```javascript
function.call(thisArg, arg1, arg2, ...)
```

- thisArg可选，非严格模式下，当值为null或者undefined时指向window
- arg1... 参数列表

demo：

```javascript
var foo = {
    name: 'xcc'
}
function bar (age) {
    console.log(`name: ${this.name}, age: ${age}`)
}
bar.call(foo, 20)    // name: xcc, age: 20
```

注意事项：

1. call改变了this的指向，由bar指向了foo
2. bar函数执行了

### 模拟实现

第一步：

试想当调用call时，把foo对象改造如下：

```javascript
var foo = {
    name: 'xcc',
    bar: function() {
        console.log(this.name)
    }
}
```

带来的问题，给foo函数引入了对于的属性bar

解决方式：通过delete方法删除多余属性

模拟步骤分为下面几部：

1. 将函数设置为对象的属性
2. 执行该函数
3. 删除该函数

等价于下面流程：

```javascript
// 第一步
foo.fn = bar
// 第二步
foo.fn()
// 第三步
delete foo.fn
```

实现方式：

```javascript
// 第一版
Function.prototype.call2 = function(context) {
    // 首先获取调用call的函数，通过this获取
    context.fn = this
    context.fn()
    delete context.fn
}

var foo = {
    name: 'xcc'
}

function bar() {
    console.log(this.bar)   // xcc
}

bar.call2(foo)
```

### 第二步

给定call函数执行时添加参数执行

```javascript
var foo = {
    name: 'xcc'
}

function bar(age) {
    console.log(this.name, age)
}

bar.call(foo, 20)   // xcc 20
```

```javascript
// 第二版
Function.prototype.call2 = function(context) {
    context.fn = this || window
    var args = []
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']')
    }
    eval('context.fn(' + args +')')
    delete context.fn
}

var foo = {
    value: 1
}

function bar(name, age) {
    console.log(this.value, name, age)  // 1 xcc 20
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(foo, 'xcc', 20)
```

注意事项：

1. call()方法第一个值为null或者undefined时，非严格模式下指向window
2. 函数是可以有返回值的
3. 自定义call函数时入参的处理方式

## apply

apply()方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数

语法：

```javascript
func.apply(thisArg, [argsArray])
```

demo：

```javascript
var foo = {
    name: 'xcc'
}
function bar (nums) {
    console.log(this.name, nums)    // xcc 20
}
bar.apply(foo, [20])
```

### 实现方式

```javascript
Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window
    context.fn = this

    var result
    if (!arr) {
        result = context.fn()
    }
    else {
        var args = []
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result
}
```

## 参考资料

- [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
- [github查看更多文章](https://github.com/xccjk/x-blog)
