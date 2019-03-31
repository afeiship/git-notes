# standard-relase
> 这里给出的是测试回滚的解决方案.
> 其实正式版的就对应 TAG 来管理，也是同理.

## standard-project
1. 建立项目：`git@gitee.com:finxos/standard-project.git`
2. 建立好 `release` 分支
3. 进入 `release` 分支做一个 `.gitignore`，把 `dist` 不要exclude
4. ln -s 进行软链接
   ```shell
   ln -s /data/project-dist/standard-project/dist/ /data/editor
   ```
5. 项目列新：`cd /data/editor && git pull`
6. 项目回滚到目标 hash
   ```shell
   git checkout bc87d2e2f359ecab31025e7896501e9f0dfaffcd
   ``` 

## target dir
~~~
$ tree
.
├── editor -> project-dist/standard-project/dist/
└── project-dist
    └── standard-project
        ├── README.md
        └── dist
            ├── from-master.md
            ├── iamrelease.md
            └── index.html
~~~
