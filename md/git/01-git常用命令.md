# git常用命令

## 新建项目

### 初始化项目

```javascript
git init
```

## 分支管理

### 查看本地分支

```javascript
git branch
```

### 查看远程分支

```javascript
git branch -r
```

### 查看所有分支

```javascript
git branch -a
```

### 新建分支

```javascript
git branch [branch-name]
```

### 新建分支并切换到新建分支

```javascript
git checkout -b [branch-name]
```

### 切换到已有分支

```javascript
git checkout [branch-name]
```

### 切换到上一个分支

```javascript
git checkout -
```

## 查看消息

### 查看变更文件

```javascript
git status
```

### 查看当前分支历史提交记录

```javascript
git log
```

### 查看当前分支历史提交记录(不包含提交人信息，只有commitid信息)

```javascript
git log --pretty=oneline
```

### 检索提交历史

```javascript
git log -S [keyword]
```

### 查看某个文件的版本历史

```javascript
git log --follow [file-name]
```

### 查看过去指定次数的提交历史

```javascript
git log 10 --pretty --oneline
```

### 查询当前分支最近几次提交

```javascript
git reflog
```

### 查看当前修改差异

```javascript
git diff
```

### 查看指定文件变更内容

```javascript
git diff [file-name]
```

### 查看待提交文件的修改内容，可以实现文件下的部分提交

```javascript
git add -p
```

### 添加指定文件到暂存区

```javascript
git add [file-name]
```

### 添加指定文件夹暂存区

```javascript
git add [dir]
```

### 添加所有修改文件到工作区

```javascript
git add .
```

### 提交暂存区到仓库区

```javascript
git commit -m [message]
```

### 提交指定文件

```javascript
git commit [file-name] [file-name1] ... -m [message]
```

## 远程同步

### 全新仓库首次提交到远程仓库

```javascript
git init
git add .
git commit -m 'feat: init'
git branch -M master
git remote add origin git@github.com:xccjk/app.git
git push -u origin master
```

### 历史代码提交到新仓库

```javascript
git remote add origin git@github.com:xccjk/app.git
git branch -M master
git push -u origin master
```

### 查看所有远程仓库

```javascript
git remote -v
```

### 上传本地指定分支到远程仓库

```javascript
git push [remote] [branch]
```

### 强行推送当前分支到远程仓库，即使存在冲突

```javascript
git push [remote] --force
```

### 托送所有分支到远程仓库

```javascript
git push [remote] --all
```

### 下载远程仓库的所有变动

```javascript
git fetch [remote]
```

## 删除

### 删除本地分支

```javascript
git branch -d [branch-name]
```

### 强制删除本地分支

```javascript
git branch -D [branch-name]
```

### 删除远程分支

```javascript
git push origin -d [branch-name]
```

## 撤销

### 舍弃部分文件修改

```javascript
git checkout [file-name]
```

### 舍弃所有修改

```javascript
git checkout .
```

### 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变

```javascript
git reset [file]
```

### 重置暂存区与工作区，与上一次commit保持一致

```javascript
git reset --hard
```

### 恢复某个commit的指定文件到暂存区和工作区

```javascript
git checkout [commit] [file]
```

### 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变

```javascript
git reset [commit]
```

### 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致

```javascript
git reset --hard [commit]
```

### 暂时将未提交的变化移除，稍后再移入

```javascript
git stash
git stash pop
```

## tag

### 创建tag

```javascript
git tag [tag-name]
```

### 创建tag并提交到远程

```javascript
git push origin [tag-name]
```

### 提交所有tag到远程

```javascript
git push origin --tags
```

### 查看指定tag

```javascript
git show [tag-name]
```

### 查看本地所有tag

```javascript
git tag
```

```javascript
git tag -l
```

### 查看远程所有tag

```javascript
git ls-remote --tags origin
```

### 删除本地tag

```javascript
git tag -d [tag-name]
```

### 删除远程tag

```javascript
git push origin -d [tag-name]
```