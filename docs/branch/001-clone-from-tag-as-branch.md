# git clone code for tag create branch

```shell
git checkout -b newbranch v1.0

## eg:
# git checkout -b dev2.3.1 v2.3.1

# from remote branch
git checkout -b $BRANCH remotes/origin/$BRANCH;

# eg: git checkout -b feature/test_fe#afei remotes/origin/feature/test_fe#afei;
```

## chinese:
> Git-根据tag创建分支
+ https://www.cnblogs.com/senlinyang/p/9455426.html

~~~
有时候需要根据tag创建分支. 
现在主分支上有一个tag为vtest.1.0.FINAL,主分支的名字为master.
~~~

1. 执行:git origin fetch 获得最新.
2. 通过:git branch 会根据tag创建新的分支.
~~~
例如:git branch newbranch vtest.1.0.FINAL 
会以tag vtest.1.0.FINAL创建新的分支newbranch;
~~~
3. 可以通过git checkout newbranch 切换到新的分支.
4. 通过 git push origin newbranch 把本地创建的分支提交到远程仓库.



## resources:
+ https://stackoverflow.com/questions/10940981/how-to-create-a-new-branch-from-a-tag
