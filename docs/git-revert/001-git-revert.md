# git revert

```shell
# 1. find your target commid_id
git log

# 2. hard reset
git reset --hard <commidId> && git clean -f

# 3. push force to override the online branch
git push -u origin YOUR_BRANCH_NAME -f
```
