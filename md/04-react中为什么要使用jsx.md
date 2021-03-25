# react中为什么要使用jsx

## 什么是jsx

<p>jsx是一个JavaScript的语法扩展，或者说是一个类似XML的ECMAScript语法扩展</p>

## jsx核心概念

<p>react本身不强制使用jsx，在没有jsx时，react实现一个组件依赖于使用React.createElement函数</p>

```
class Hello extends React.Component {
  render() {
    return React.createElement(
      'div',
      null, 
      `Hello ${this.props.toWhat}`
    )
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
)

```

<p>使用jsx后</p>

```
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
)
```

### jsx的优势

<p>代码变得更加简洁，而且代码结构层次更为清晰</p>

<p>react需要将组价 转化为虚拟DOM树，所以我们在编写代码时，实际上是在手写一棵结构树。而XML 在树结构的描述上天生具有可读性强的优势</p>


## 方案对比

### 模板

<p>React 团队认为引入模板是一种不佳的实现。 因为模板分离了技术栈，而非关注点的模板同时又引入了更多的概念</p>

### 模板字符串

<p>模板字符串编写的结构会造成多次内部嵌套，使整个结构变得复杂，并且优化代码提示也会变得困难重重</p>

```
var box = jsx`
  <${Box}>
    ${
      shouldShowAnswer(user) ?
      jsx`<${Answer} value=${false}>no</${Answer}>` :
      jsx`
        <${Box.Comment}>
         Text Content
        </${Box.Comment}>
      `
    }
  </${Box}>
`
```

### JXON

<p>因为代码提示困难的原因而被放弃</p>


<img src='https://s0.lgstatic.com/i/image/M00/73/A4/Ciqc1F_GJSSAU6odAAFLeX8UyTo307.png' width='500' />