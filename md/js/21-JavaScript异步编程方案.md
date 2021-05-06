# JavaScript异步编程方案

## 问题

1. 同步编程和异步编程的区别在哪里？
2. 回调地狱有哪些方法可以解决？

### 什么是同步

同步就是在执行某段代码时，在该代码没有得到返回结果之前，其它代码暂时是无法执行的，会等待前面的代码执行完再执行

### 什么是异步

异步就是当一段代码执行异步过程调用发出后，这段代码不会立刻返回结果。而是在异步调用发出后，一般通过回调函数处理这个调用之后拿到的结果。异步调用发出后，不会阻止后面代码的执行，这个过程称为异步

### JavaScript编程为什么需要异步

因为JavaScript是单线程的，如果代码都是同步执行的，会造成阻塞

## JavaScript异步编程发展历程

### 回调函数

- 在早期，JavaScript的异步编程，一般都是通过回调函数的形式实现的，比如典型的事件回调或者用setTimeout/setInterval来实现一些异步编程的操作

```javascript
getApi(url, function(err, res) {
  getApi(url1, function(err, res) {
    getApi(url2, function(err, res) {
      // 业务逻辑
    })
  })
})
```

回调实现异步编程的场景：

1. ajax请求回调
2. 定时器的回调
3. 事件回调
4. Node中方法回调

### Promise

- ES6中社区新增的，为了解决回调地狱提出的Promise方案
- 可以提高可读性，将异步代码以同步操作的流程表达出来
- 回调层数过多的情况下，也会使Promise链式调用的操作过多

```javascript
function getFunc(url) {
  return new Promise((resolve, reject) => {
    getApi(url, function(err, res) {
      if (err) reject(err)
      resolve(res)
    })
  })
}
getFunc(url).then(data => {
  return getFunc(url1)
}).then(data => {
  return getFunc(url2)
}).then(data => {
  console.log(data)
})
```

```javascript
// 如果请求没有前后依赖关系
function getFunc(url) {
  return new Promise((resolve, reject) => {
    getApi(url, function(err, res) {
      if (err) reject(err)
      resolve(res)
    })
  })
}
// Promise.all的语法可以实现多个异步并行执行，同一时刻取得最终结果，不过当有任意请求失败时，请求会失败
Promise.all([getFunc(url), getFunc(url1), getFunc(url2)]).then(data => {
  console.log(data)
}),catch(err => {
  console.log(err)
})
```

### Generator

- Generator也是在ES6阶段提出的异步编程方案
- 可以看成是一个容器，需要暂停的地方，可以通过yield语法来标注，返回一个迭代器

```javascript
function* fun() {
  let a = yield 111;
  console.log(a)  // {value: 111, done: false}
  let b = yield 222;
  console.log(b)  // {value: 222, done: false}
  let c = yield 333;
  console.log(c)  // {value: 333, done: false}
  let d = yield 444;
  console.log(d)  // {value: 444, done: false}
}
let t = fun()
t.next(1) // 第一次调用next函数，传递的参数无效，不会有打印结果
t.next(2) // 2
t.next(3) // 3
t.next(4) // 4
t.next(5) // 5
```

### async/await

- ES7中新增的异步解决方案，async是Generator的语法糖
- 语法类似同步调用，不会形成Promise一样的方法链
- saync返回的是Promise对象，await控制执行顺序

```javascript
function getFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('async')
      resolve()
    }, 1000)
  })
}
async function func() {
  await getFunc()
  console.log('hello')
}
func()  // async hello
```
