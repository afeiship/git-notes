# standard project

> 标准项目的分支管理规范。

## branches

- master: 分支为线上主分支，存放随时可以在生产环境中部署的代码
- develop: 分支为开发主分支，所有其他分支修改过的记录全部要合入该分支，确保 develop 分支包含所有修改与新增的代码。转测时的 bug 修改在该分支进行。
- feature: 为迭代开发分支，负责产品主功能迭代。从 develop 分支拉取，开发完成后再合并回 develop 分支。
- release: release 分支为测试主分支，存放转测代码。
- hotfix: 分支为紧急修复分支，当线上出现严重问题或者有特别紧急的需求/运营活动上线，则直接从 master 分支单独拉取出来，在该分支修改、测试，然后上线并同步合入 develop 分支。

## tags

> Readonly 的版本.

- v1.0.0
- v1.0.1

## versions

- standard (1.0.12)
- hotfix (1.0.12.1)
- tag (v1.0.12/v1.0.12.1)

## build tools

- bash(shell)
- webpack
- gulp
- rake(ruby)

## work flow

- 所有新功能开发都从 develop 分支上拉取新的分支
- 项目 dist 目录会定期 push 到 release 分支上，这个分支上有 hash 但没有版本号
- 所有在线上稳定运行的分支都会以 tag 存在于 tags 上，这个都有版本号，会比较连续(v1.0.1 -> v1.0.2 ... )
- 线上版本能快速回滚(利用 git 直接对应版本回滚); 测试版本，利用 hash(OR short hash);

## reference

- https://blog.csdn.net/weixin_37753627/article/details/82999063
