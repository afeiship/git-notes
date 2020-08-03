# cheery-pick
> 将某条提交，合并到某个分支。


## steps
1. 假设，我们的目标分支是 `staging` 
2. 首先 `checkout` 到这个分支
3. 找到需要 merge 进来的 git hash 如 `2346383610259c15ba929822e7de0dad4588e315`
4. 执行：`git cheery-pick 2346383610259c15ba929822e7de0dad4588e315`
5. 确认没有 `conflict`
6. 最后 `git push`
