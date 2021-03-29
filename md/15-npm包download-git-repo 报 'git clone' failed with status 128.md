# npm包download-git-repo 报 'git clone' failed with status 128

最近在通过`download-git-repo`包来拉取不同的项目模板，[download-git-repo npm](https://www.npmjs.com/package/download-git-repo)

看了一下使用文档，发现非常的简单明了，适用于`github`，`gitlab`等

```javascript
// 安装
npm install download-git-repo

// 使用
const download = require('download-git-repo')

download('flippidippi/download-git-repo-fixture', 'test/tmp', function (err) {
  console.log(err ? 'Error' : 'Success')
})
```

运行案例的可以正常运行，安装文档配置后一直报错

```javascript
'git clone' failed with status 128
```

## 正确的使用方式

通过**direct:url...来进行克隆**

```javascript
// 正确的使用方式
download('direct:https://github.com/xccjk/app.git', 'app', { clone: true }, function (err) {
  console.log(err ? err : 'success')
})
```
