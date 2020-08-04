# git revert
> 这个操作慎用。

```shell
# 1. find your target commid_id
git log

# 2. hard reset
git reset --hard <commidId> && git clean -f

# 3. push force to override the online branch 
# you are not allowed to force push code to a protected branch on this project. -- 需要处理权限
git push -u origin YOUR_BRANCH_NAME -f
```

## resources
- https://stackoverflow.com/questions/4114095/how-do-i-revert-a-git-repository-to-a-previous-commit



## 2020-08-04 
> 最近的实操

## git revert
> 回滚到具体的 hash 值版本
~~~
git reset --hard 3ab06f8c40dd370d168afce58bed82a0cd16a2dc
git reset --soft HEAD@{1}
git commit -ma "xxx";
git push
~~~

## pick changes
```shell
# 回滚完把具体的修改加到当前的分支
git cherry-pick acc15263383f7824245070e3a5b4e091c33bdf17
git commit -ma "chore: pick change";
git push
```
- https://stackoverflow.com/questions/1895059/revert-to-a-commit-by-a-sha-hash-in-git
