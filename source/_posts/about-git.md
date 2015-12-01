title: about_git
date: 2015-11-27 10:30:12
categories: git
tags: git
---

git 命令参数神码的太多。
自己折腾git的地方
<!--more-->
更新远程代码到本地
```bash
$git remote -v                 #远程仓库
norigin https://github.com/mytest/test.git (fetch)
norigin https://github.com/mytest/test.git (push)
origin	https://github.com/mytest/test.git (fetch)
origin	https://github.com/mytest/test.git (push)

$git fetch origin master:temp  #将远程仓库origin的master分支下载到本地为temp

$git diff temp                 #比对

$git merge temp                #合并temp分支到master分支
```


反正我就是这么更新远程到码到本地的。