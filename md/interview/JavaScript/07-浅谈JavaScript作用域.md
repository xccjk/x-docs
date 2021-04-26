# JavaScript作用域

## 什么是作用域

- JavaScriptt的作用域通俗的将，就是指变量能够被访问到的范围
- 作用域是用来确定在何处以及如何查找变量/标识符的规则
- 作用域就是查找变量的地方

## 作用域分类

### 全局作用域

- 全局作用域是挂载在window对象下的，在任何位置都可以访问到
- 直接被赋值的变量默认为全局变量，拥有全局作用域

函数test执行时打印了变量b，在函数内部没有找到变量b时，会到函数外层中查找，找到了就停止查找并且输出。这种通过访问函数外部变量的方式称为`全局作用域`

```javascript
// 全局作用域
var a = 1
function test() {
    console.log(a)    // 1
}
test()
console.log(a)    // 1
```

直接赋值的变量

```javascript
name = 'xcc'
console.log(window.name)    // xcc
```

### 函数作用域

- 在JavaScript中，函数内部定义的变量叫做函数变量，这个变量只能在函数内部访问到，它的作用域在函数内部，称为函数作用域
- 函数内部的变量，在没有被其它位置引用时，会在函数执行完后被销毁

函数test1执行时打印了变量a，变量a是在函数内部定义的，这种在函数内部就访问到了变量的称为`函数作用域`

```javascript
// 函数作用域
function test1() {
    var a = 1
    console.log(a)    // 1
}
test1()
console.log(a)    // ReferenceError: a is not defined
```

### 块级作用域(ES6新增)

- 通过`let`关键字进行声明
- 会有暂时性死区的特点，即在变量定义之前是不能被使用的

JavaScript中`if`语句`for`语句后面的{}里面包含的，就是快级作用域

```javascript
console.log(name)    // ReferenceError: name is not defined
if(true) {
    var name = 'xcc'
    console.log(name)    // xcc
}
console.log(name)    // ReferenceError: name is not defined
```

## 作用域相关知识点

### 作用域链

在函数`test`的执行过程中，在查找a变量时，先在函数内部查找，没有找到，就到全局作用域中查找，有一个往外查找的过程。好像是顺着一条链条从上往下查找变量，这条链条我们称为作用域链

### 作用域嵌套

```javascript
// 全局作用域
var a = 1
function fn1() {
    // 作用域3
    var b = 2
    function fn2() {
        // 作用域2
        var c = 3
        function fn3() {
            // 作用域1
            var d = 4
            console.log(a)
        }
    }
}
```

## 词法作用域

- 词法作用域又叫静态作用域，`函数的作用域在函数定义的时候就规定了`，这个规则其实就是`就近原则`
- `函数定义阶段决定了JavaScript查找变量的方式，而不是调用阶段`

```javascript
var name = 'xcc'
function foo() {
    console.log(name)    // xcc
}
function bar() {
    var name = 'xcc1'
    foo()
}
bar()
```

等价于

```javascript
var name = 'xcc'
function foo() {
    console.log(name)    // xcc
}
foo()
```

```javascript
function foo() {
    console.log(name)    // undefined
}
function bar() {
    var name = 'xcc1'
    foo()
}
bar()
```

```javascript
var scope = 'global scope';
function checkscope(){
    var scope = 'local scope';
    function f(){
        return scope;
    }
    return f();
}
checkscope();    // local scope


var scope = 'global scope';
function checkscope(){
    var scope = 'local scope';
    function f(){
        return scope;
    }
    return f;
}
checkscope()()    // local scope
```

## 参考资料

- [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)
- [JavaScript查看更多文章](https://github.com/xccjk/x-blog)
