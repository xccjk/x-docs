# git commit提交规范

<p>在现在的前端开发中，项目常常由多个人共同维护，但是由于每个人的代码风格、提交规范方面、编辑器设置等各方面的原因，导致提交上去的代码风格没有保持统一，常见的有下列几个问题:</p>

- 缩进、换行、命名、结尾逗号等规则...
- 样式文件属性的先后顺序规则
- commit时文案，比如曾经见过git commit -m 'dddddd'等commit记录
- 每次迭代的changelog记录
- ...

## git commit规范配置

<p>husky是一个git hook工具，会在git的某个钩子阶段添加对应的文件效验</p>
<p>lint-staged 是一个在 git 暂存文件上（也就是被 git add 的文件）运行已配置的 linter（或其他）任务</p>

```javascript
npm install -D husky lint-staged
```

package.json文件添加下面内容

```javascript
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write",
    "git add"
  ]
}
```