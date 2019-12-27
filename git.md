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

// 再查看文件已经没有上一个版本的内容了 那如何恢复已经删除的版本呢
git reset --hard gitID  // 前提是命令窗口还未关闭 可以查看 gitID

git reflog 用来记录每一次命令 // 不用担心窗口关闭查找不到gitID 



### git缓存区

版本仓库 repository 
git最重要的是称为stage（或者index）的暂存区
git 会为我们创建第一个分支master 以及只想master的指针叫HEAD

复习一
第一步 git add 把文件添加 是把文件添加进暂存
第二步 git commit 提交更改  是把暂存文件提交给当前分支


UNtracked files

git add 实际上就是把提交的所有修改放到暂存区 Stage
然后执行 git commit 就可以一次性把暂存的所有修改提交给分支
 
git checkout -- <file.name>  将指定工作区的修改全部撤销 

命令中的-- 很重要 如果没有就变成了切换到另一个分支的命令

git reset HEAD <file.name> 把暂存区的修改撤回 重新放回工作区

生成ssh 秘钥 id_rsa和id——rsa.pub 连个文件 id——rsa 是私钥 
id_rsa.pub是公钥 github上传的是公钥

ssh-keygen -t rsa -C "yyouremail@example.com"

链接远程仓库
git remote add origin <github.repositiry.url>

推送到远程仓库上
git push -u origin master

从远程库克隆

首先创建远程库

git clone 克隆一个本地库
git clone <url>
ls 查看文件


分支 首先创建分支 dev分支 然后切换分支

** 创建分支 并切换分支 -b参数表示创建并切换分支**
git checkout -b dev 


相当于下面命令
git branch <name>
git checkout <name>

查看当前分支
git branch 


合并分支 
git merge <name>

删除分支
git branch -d dev 


switch 命令切换创建分支 

创建分支 git switch -c dev

切换分支 git switch master


分支存在差异如何手动处理

先切换到master分支
git checkout master
 
合并分支会出现差异文件提示 <<<<<<<<< HEAD ======== >>>>>>>>>>>


进行修改保留和dev分支一样
在进行添加 提交 便可以成功合并仓库 
之后就可以删除仓库了

查看分支合并图
git log --graph --pretty=oneline 

















