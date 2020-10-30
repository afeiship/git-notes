# delete branch


## delete local
```shell
git branch --delete dev

# 没有合并的是无法合并的
git branch -d xx-branch

# 无论怎么样都可以删除
git branch -D yy-branch
```

## delete remote
```shell
git push origin --delete dev
```

## resources
- https://www.jianshu.com/p/5068997164cb
