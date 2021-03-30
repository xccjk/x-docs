# git版本回退

## 查看历史提交

```javascript
git log
```

## 回退到指定版本

```javascript
git reset --hard commitid
```

## 回到上一个版本

```javascript
git reset --hard HEAD^
```

## 回退到之前的版本后，要回到当前版本之后的版本

```javascript
git reflog
git reset --hard commitid
```