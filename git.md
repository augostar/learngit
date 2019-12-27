git init 命令把这个目录变成git可以管理的仓库

第一步git add告诉git 把文件添加到仓库
git add file.name

执行git add file.name无显示内容说明执行成功
执行git add  可以添加多个文件 git add file1.name file2.name

第二步 git commit 告诉 git把文件提交给仓库

git commit -m "提示信息" 强烈建议要写
git commit 同时会提交多个文件

第三步执行 git status 
git  status 查看仓库 哪些文件被修改了 需要提交的内容


modified(修改) modified 后面是被修改的文件


git diff <file.name> 查看具体被修改的内容

diff  difference(差异) 简写


git log 查看历史记录

也可以添加参数 --pretty=oneline 输出成一行 

如：// 一大串85ed...的是commit id 版本号 
85edc1b8670271cca212e47480587aa430375f82 <E6><88><91><E5><9C><A8><E5><AD><A6>git

启动时光穿梭 
git用HEAD表示当前版本 也就是最近提交的版本 上一个版本就是HEAD^ 上上个版本HEAD^^ 
当然版本很多的时候可以用数字来表示第多少版本 比如第三十个 HEAD~30

上一个版本
git reset --hard HEAD^
