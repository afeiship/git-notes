# git-flow started

## init
```shell
# initial
git-flow init

# push to remote
git push --set-upstream origin develop
```
![](https://tva1.sinaimg.cn/large/00831rSTgy1gd3kreb9zhj30vs0c2mzw.jpg)

## show config
```shell
git-flow config

code .git/config
```
![](https://tva1.sinaimg.cn/large/00831rSTgy1gd3l6br3pmj30y807ajt7.jpg)

## new feature
```shell
git flow feature start operation-panel
```
![](https://tva1.sinaimg.cn/large/00831rSTgy1gd3lajfkd0j315m09476b.jpg)

## push to remote
- https://stackoverflow.com/questions/41871617/git-flow-push-non-ready-feature-on-remote-git-server

```shell
git push -u origin new-feature
# OR
git flow feature publish <name_of_feature>
```
