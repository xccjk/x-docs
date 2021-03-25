# react的生命周期及作用

## react的生命周期阶段

- 挂载阶段
- 更新阶段
- 卸载阶段

## 挂载阶段

<p>挂载阶段是指组件从初始化到完成加载的过程</p>

### constructor

<p>constructor 是类通用的构造函数，常用于初始化</p>

- constructor 中并不推荐去处理初始化以外的逻辑
- 本身 constructor 并不属于 React 的生命周期，它只是 Class 的初始化函数
- 通过移除 constructor，代码也会变得更为简洁

### getDerivedStateFromProps

<p>本函数的作用是使组件在 props 变化时更新 state，那它什么时候才会起效呢？它的触发时机是</p>

- 当 props 被传入时
- state 发生变化时
- forceUpdate 被调用时

### render

<p>render函数返回jsx结构，用于描述具体的渲染内容</p>
<p>render函数应该是一个纯函数，不应该在里面产生副作用，比如setState。render函数每次渲染会被调用，而setState会触发重新渲染</p>

### componentDidMount

<p>componentDidMount 主要用于组件加载完成时做某些操作，比如发起网络请求或者绑定事件，该函数是接着 render 之后调用的</p>


## 更新阶段

### UNSAFE_componentWillReceiveProps

### getDerivedStateFromProps

### shouldComponentUpdate

<p>该方法通过返回 true 或者 false 来确定是否需要触发新的渲染</p>

<p>React 官方提供了一个通用的优化方案，也就是 PureComponent。PureComponent 的核心原理就是默认实现了shouldComponentUpdate函数，在这个函数中对 props 和 state 进行浅比较，用来判断是否触发更新</p>

### render

### getSnapshotBeforeUpdate

<p>getSnapshotBeforeUpdate 方法是配合 React 新的异步渲染的机制，在 DOM 更新发生前被调用</p>

### componentDidUpdate

## 卸载阶段

### componentWillUnmount

<p>该函数主要用于执行清理工作</p>

<img src='https://s0.lgstatic.com/i/image/M00/73/67/Ciqc1F_F-8eAM4p3AAO5OnKAE-o626.png' width='500' />