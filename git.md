### git日常操作

- 克隆仓库：git clone git@github.com:jasonandjay/project.git
- 拉取代码：git pull origin master
- 新建分支：git branch srr
- 删除分支：git branch -d srr
- 切换分支：git checkout srr
- 推送远程：git push origin master
- 查看提交记录：git log
- 回滚代码： git reset --hard [commit:6]
- 回滚文件： git checkout -- filepath
- 回到最新代码：git reset HEAD | git pull origin master
- 隐藏当前分支改动： git stash
- 回退隐藏：git stash pop
- 合并分支：git merge srr
- 会用PR给他人仓库贡献代码