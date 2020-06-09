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
