# 几句话，让你搞懂this问题

## 先说结论

- 函数被谁调用，this就是谁，如果没有被对象调用，this就是window
- 通过new声明的构造函数，函数内容的this永远指向函数本身
- 箭头函数没有this，箭头函数内部的this取决于外部定义时的环境
- 箭头函数的this指向外层函数的this，如果外层也不存在this，会查找到window

## 常见的几种this使用场景

### 声明式

```javascript
function test1() {
  console.log(this)
}
test1() // window
```

### 匿名函数/赋值式

```javascript
var test2 = function () {
  console.log(this)
}
test2() // window
```

### 对象中定义

```javascript
var a = 1
var obj = {
  a: 2,
  test3: function () {
    console.log(this)
    console.log(this.a)
  }
}
obj.test3() // obj 2
```

### 循环中

```javascript
// 循环中
[1, 2, 3].forEach(function () {
  console.log(this) // window
})
```

### 箭头函数

```javascript
var obj2 = {
  test4: function () {
    console.log(this)
  },
  test5: () => {
    console.log(this)
  },
  test6: function () {
    var test7 = () => console.log(this)
    test7()
  },
  test8: () => {
    var test9 = () => console.log(this)
    test9()
  }
}

obj2.test4()  // {test4: ƒ, test5: ƒ, test6: ƒ, test8: ƒ}
obj2.test5()  // window
obj2.test6()  // {test4: ƒ, test5: ƒ, test6: ƒ, test8: ƒ}
obj2.test8()  // window
```

### new

```javascript
var a = 1
function foo() {
  console.log(this)    // foo {}
}
var obj = new foo()
obj.a = 2
console.log(obj)  // foo {a: 2}
console.log(obj.a)  // 2
```

## 几种改变this指向的方式

### call()

```javascript
var obj1 = {
  name: 'xcc',
  age: 20,
  sex: '男'
}

var obj2 = {
  name: 'xcc1',
  age: 28,
  test1: function () {
    console.log(this)
  }
}

obj2.test1()  // {name: "xcc1", age: 28, test1: ƒ}

obj2.test1.call(obj1, '123') // {name: "xcc", age: 20, sex: "男"}
```

### apply()

```javascript
var obj1 = {
  name: 'xcc',
  age: 20,
  sex: '男'
}

function test2(name, age, sex) {
  console.log(name, age, sex, this)
}

test2.apply(obj1, ['xcc2', 18, '女']) // xcc2 18 女 {name: "xcc", age: 20, sex: "男"}
```

### bind()

```javascript
var obj1 = {
  name: 'xcc',
  age: 20,
  sex: '男'
}

function test2(name, age, sex) {
  console.log(name, age, sex, this)
}

var test3 = test2.bind(obj1)
test3('xcc3', 30, '男')   // xcc3 30 男 {name: "xcc", age: 20, sex: "男"}
```
