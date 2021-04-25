# CSS实现隐藏元素的几种方式

- display隐藏元素会脱离文档流，其他几种虽然节点隐藏，但是在文档中还是可以看到

## display: none

```css
.box {
    display: none
}
```

## opacity: 0

```css
.box {
    opacity: 0
}
```

## visibility: hidden

```css
.box {
    visibility: hidden
}
```

## position

```css
.box {
    position: absolute;
    left: -99999px;
    top: -99999px
}
```

## clip-path

```css
.box {
    clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);
}
```
