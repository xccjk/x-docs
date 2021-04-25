# CSS盒模型

盒模型组成 = 内容区(content) + 内边距(padding) + 边框(border) + 外边距(margin)

## 盒模型类型

### 标准盒模型

- width = content

<img src='./img/01.jpeg' width='500' />

### IE盒模型

- width = content + padding + border

<img src='./img/02.jpeg' width='500' />

## 切换盒模型方式

- CSS3中通过`box-sizing`属性来切换盒模型
- `box-sizing`默认值为`content-box`

```css
/* 标准盒模型 */
box-sizing: content-box;
/* 怪异盒模型 */
box-sizing: border-box;
```

## box-sizing属性

### content-box

- 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中

### border-box

- 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值

### inherit

- 指定box-sizing属性的值，应该从父元素继承
