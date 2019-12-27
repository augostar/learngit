git init 命令把这个目录变成git可以管理的仓库

第一步git add告诉git 把文件添加到仓库
git add file.name

执行git add file.name无显示内容说明执行成功
执行git add  可以添加多个文件 git add file1.name file2.name

第二步 git commit 告诉 git把文件提交给仓库

git commit -m "提示信息" 强烈建议要写
git commit 同时会提交多个文件

第三步执行 git status 
modified(修改) modified 后面是被修改的文件


git diff <file.name> 查看具体被修改的内容

diff  difference(差异) 简写


